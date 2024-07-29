import S from './styles.module.css';

export type ContentSectionProps = {
  children: React.ReactNode;
};

export function ContentSection({ children }: ContentSectionProps) {
  return (
    <>
      <main className={S.contentSection}>{children}</main>
    </>
  );
}
