import logoPrimaryIMG from '../../../assets/images/logo-primary.png';
import S from './styles.module.css';

export function VerticalBanner() {
  return (
    <section className={S.verticalBanner}>
      <img
        src={logoPrimaryIMG}
        alt="Logo juntamente com o nome Clínica Oitava Rosado"
      />
    </section>
  );
}
