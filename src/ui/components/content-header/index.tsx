import S from './styles.module.css';

export type ContentHeaderProps = {
  children: React.ReactNode;
};

export function ContentHeader({ children }: ContentHeaderProps) {
  return (
    <>
      <div className={S.contentHeaderContainer}>
        <header className={S.contentHeader}>{children}</header>
      </div>
    </>
  );
}
