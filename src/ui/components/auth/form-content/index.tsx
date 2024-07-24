import S from './styles.module.css';

export type FormContentProps = {
  children: React.ReactNode;
};

export function FormContent({ children }: FormContentProps) {
  return <div className={S.authFormContent}>{children}</div>;
}
