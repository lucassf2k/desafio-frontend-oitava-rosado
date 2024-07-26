import { useState } from 'react';
import eyeIcon from '../../../assets/icons/eye.svg';
import S from './styles.module.css';

export interface InputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
}

export function InputPassword(props: InputPasswordProps) {
  const [passwordType, setPasswordType] = useState('password');

  const handleTogglePasswordVisibility = () => {
    if (passwordType === 'password') return setPasswordType('text');
    if (passwordType === 'text') return setPasswordType('password');
  };

  return (
    <div className={S.authFormField}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input {...props} type={passwordType} />
      <button type="button" onClick={handleTogglePasswordVisibility}>
        <img src={eyeIcon} alt="Ícone de um olho" />
      </button>
    </div>
  );
}
