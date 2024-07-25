import logoPrimaryIMG from '../../assets/images/logo-primary.png';
import S from './styles.module.css';

export function PageNotFound() {
  return (
    <div className={S.pageNotFounContainer}>
      <main className={S.pageNotFounContent}>
        <h2>
          Desculpe :{'('} <br /> Essa página não existe!
        </h2>
        <img src={logoPrimaryIMG} alt="Logo da Oitava Rosado" />
        <a href="/">Voltar para área de Login</a>
      </main>
    </div>
  );
}
