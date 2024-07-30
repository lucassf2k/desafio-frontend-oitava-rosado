import { forwardRef } from 'react';
import S from './style.module.css';

export interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => (
  <div className={S.field}>
    <label>{props.label}</label>
    <input ref={ref} {...props} />
  </div>
));
