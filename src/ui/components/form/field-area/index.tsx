import S from './style.module.css';

export interface FieldAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function FieldArea(props: FieldAreaProps) {
  return (
    <div className={S.fieldArea}>
      <label>{props.label}</label>
      <textarea {...props} />
    </div>
  );
}
