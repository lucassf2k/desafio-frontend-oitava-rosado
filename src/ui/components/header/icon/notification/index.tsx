import notificationIcon from '../../../../assets/icons/notification.svg';
import S from './styles.module.css';

export type NotificationProps = {
  text: string;
};

export function Notification({ text }: NotificationProps) {
  return (
    <div className={S.icon}>
      <img src={notificationIcon} alt="Ícone de produtos" />
      <span>{text}</span>
    </div>
  );
}
