import { Link } from 'react-router-dom';
import S from './styles.module.css';

export type LinkToCancelProps = {
  to: string;
  text: string;
  isCancel?: boolean;
};

export function AuthLink({ to, text, isCancel }: LinkToCancelProps) {
  return (
    <div className={S.linkToCancelContainer}>
      <Link style={{ color: `${isCancel && 'var(--fgErrorColor)'}` }} to={to}>
        {text}
      </Link>
    </div>
  );
}
