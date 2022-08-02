import Actions from "@/shared/Actions/actions";
import { TaskProps } from "interfaces/task_props.interface";
import React from "react";
import { CardTask, CardDetailsWrapper } from "./styled";

interface TaskViewProps {
  task: TaskProps;
  handleAction: Function;
  setCurrentEdit: Function;
  handleEdit: Function;
  showPause?: boolean;
  showCheck?: boolean;
}
const Task = ({
  task,
  handleAction,
  handleEdit,
  setCurrentEdit,
  showPause = true,
  showCheck = true,
}: TaskViewProps) => {
  const handleEditStatus = () => {
    handleEdit();
    setCurrentEdit();
  };
  return (
    <CardTask>
      <CardDetailsWrapper onClick={() => handleEditStatus()}>
        {task.taskName}
      </CardDetailsWrapper>
      <Actions
        handleAction={handleAction}
        showPause={showPause}
        showCheck={showCheck}
      />
    </CardTask>
  );
};

export default Task;
