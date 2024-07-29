import S from './style.module.css';

export interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Field(props: FieldProps) {
  return (
    <div className={S.field}>
      <label>{props.label}</label>
      <input {...props} />
    </div>
  );
}
