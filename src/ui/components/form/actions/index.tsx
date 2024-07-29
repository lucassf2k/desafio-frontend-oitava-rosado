import { Link } from 'react-router-dom';
import S from './style.module.css';

export interface ActionsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Actions(props: ActionsProps) {
  return (
    <div className={S.actions}>
      <Link to="/home">Cancelar</Link>
      <button {...props}>Salvar informações</button>
    </div>
  );
}
