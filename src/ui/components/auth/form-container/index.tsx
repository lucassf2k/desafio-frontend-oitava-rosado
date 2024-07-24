import S from './styles.module.css';

export type FormContainerProps = {
  children: React.ReactNode;
};

export function FormContainer({ children }: FormContainerProps) {
  return <main className={S.authFormContent}>{children}</main>;
}
