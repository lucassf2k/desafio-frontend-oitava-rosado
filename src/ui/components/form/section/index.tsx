import S from './styles.module.css';

export type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <div className={S.formSection}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
