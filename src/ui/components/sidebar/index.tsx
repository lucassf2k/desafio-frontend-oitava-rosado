import logoTertiaryIMG from '../../assets/images/logo-tertiary.png';
import configIcon from '../../assets/icons/config.svg';
import logoutIcon from '../../assets/icons/log-out.svg';

import S from './styles.module.css';

export function Sidebar() {
  return (
    <section className={S.sidebar}>
      <img src={logoTertiaryIMG} alt="Logo da Oitava Rosado" />
      <div className={S.sidebarActions}>
        <button>
          <img src={configIcon} alt="Ícone de configuração" />
        </button>
        <button>
          <img src={logoutIcon} alt="Ícone de sair da página" />
        </button>
      </div>
    </section>
  );
}
