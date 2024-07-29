import S from './styles.module.css';

export type InputErrorProps = {
  message: string;
};

export function InputError({ message }: InputErrorProps) {
  return <span className={S.inputErrorContent}>{message}</span>;
}
