import S from './styles.module.css';

export type FieldGroupProps = {
  children: React.ReactNode;
};

export function FieldGroup({ children }: FieldGroupProps) {
  return <div className={S.fieldGroup}>{children}</div>;
}
