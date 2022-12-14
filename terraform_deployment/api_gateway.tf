resource "aws_apigatewayv2_api" "task_app_main" {
  name          = "task_app_main"
  protocol_type = "HTTP"
}


resource "aws_cloudwatch_log_group" "task_app_main_api_gw" {
  name              = "/aws/api-gw/${aws_apigatewayv2_api.task_app_main.name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_stage" "dev" {
  api_id      = aws_apigatewayv2_api.task_app_main.id
  name        = "dev"
  auto_deploy = true
  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.task_app_main_api_gw.arn
    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}
