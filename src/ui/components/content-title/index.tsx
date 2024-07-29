import S from './styles.module.css';

export type ContentTitleProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function ContentTitle({
  title,
  description,
  children,
}: ContentTitleProps) {
  return (
    <div className={S.contentTitleContainer}>
      <div className={S.contentTitle}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={S.contentTitleActions}>{children}</div>
    </div>
  );
}
