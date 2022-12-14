import Alert from '../Alert/Alert';
import { AlertsWrapper } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { AlertProps } from 'models/Alert.model';

const Alerts = () => {
  const alerts = useSelector((state: RootState) => state.alertState);

  return (
    <AlertsWrapper data-testid="alerts-box">
      {alerts?.map((alert: AlertProps) => (
        <Alert key={alert.id} {...alert} />
      ))}
    </AlertsWrapper>
  );
};

export default Alerts;
