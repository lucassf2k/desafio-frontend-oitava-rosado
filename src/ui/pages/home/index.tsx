import { Link } from 'react-router-dom';
import { Perfil } from '../../components/perfil';
import logoSecondaryIMG from '../../assets/images/logo-secondary.png';
import logoTertiaryIMG from '../../assets/images/logo-tertiary.png';
import notificationIcon from '../../assets/icons/notification.svg';
import productsIcon from '../../assets/icons/products.svg';
import cubeIcon from '../../assets/icons/cubo.svg';
import S from './styles.module.css';
import { Header } from '../../components/header';

export function Home() {
  return (
    <div className={S.homeContainer}>
      <section className={S.sidebar}>
        <div className={S.logoContainer}>
          <img src={logoSecondaryIMG} alt="Logo mais o nome Oitava Rosado" />
        </div>
        <nav className={S.navigationContainer}>
          <div className={S.navigationHeader}>
            <p>
              <img src={cubeIcon} alt="Ícone de um cubo" />
              Módulo - Cadastros
            </p>
            <span>Alterar</span>
          </div>
          <Link to="/">Usuários</Link>
          <Link to="/">Médicos</Link>
          <Link to="/">Pacientes</Link>
          <Link to="/">Agendamentos</Link>
        </nav>
      </section>
      <main>
        <header className={S.header}>
          <div className={S.icons}>
            <div className={S.icon}>
              <img src={notificationIcon} alt="Íconde de notificação" />
              <span>99+</span>
            </div>
            <img src={productsIcon} alt="Íconde de produtos" />
          </div>
          <Header.Separator />
          <Perfil />
        </header>
        <div className={S.homeContent}>
          <img src={logoTertiaryIMG} alt="Apenas o logo da Oitava Rosado" />
          <h1>
            Seja bem-vindo{'('}a{')'} ao sistema da Clínica Oitava Rosado
          </h1>
          <p>Navegue pelos itens no menu para ter acesso às funcionalidades</p>
        </div>
        <footer>
          <Link to="#">Feedback</Link>
          <Link to="#">Centro de suporte</Link>
          <Link to="#">Contato</Link>
        </footer>
      </main>
    </div>
  );
}
