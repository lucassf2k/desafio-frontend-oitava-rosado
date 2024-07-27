import avatarIMG from '../../assets/images/avatar.png';
import S from './styles.module.css';

export function Perfil() {
  return (
    <div className={S.perfilContent}>
      <p>
        Olá, <strong>Dyego</strong> Clínica Oitava Rosado
      </p>
      <img src={avatarIMG} alt="Foto de perfil" />
    </div>
  );
}
