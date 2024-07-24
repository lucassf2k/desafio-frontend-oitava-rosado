import S from './styles.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button(props: ButtonProps) {
  return (
    <button className={S.authFormButton} {...props}>
      {props.label}
    </button>
  );
}
