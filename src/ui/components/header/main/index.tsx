import { Header } from '..';
import { Perfil } from '../../perfil';
import S from './styles.module.css';

export type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <header className={S.header}>
      <div className={S.icons}>{children}</div>
      <Header.Separator />
      <Perfil />
    </header>
  );
}
