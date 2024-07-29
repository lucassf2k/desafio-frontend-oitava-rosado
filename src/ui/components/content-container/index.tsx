import S from './styles.module.css';

export type ContentContainerProps = {
  children: React.ReactNode;
};

export function ContentContainer({ children }: ContentContainerProps) {
  return <section className={S.contentContainer}>{children}</section>;
}
