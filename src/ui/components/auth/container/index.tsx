import S from './styles.module.css';

export type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className={S.authContainer}>{children}</div>;
}
