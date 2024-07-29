import S from './styles.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  errorComponent?: React.ReactNode;
}

export function Input(props: InputProps) {
  return (
    <div className={S.authFormField}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input {...props} />
      {props.errorComponent}
    </div>
  );
}
