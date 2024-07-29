import { FormHTMLAttributes } from 'react';

import S from './style.module.css';

export interface CustomFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function CustomForm(props: CustomFormProps) {
  return <form className={S.form} {...props}></form>;
}
