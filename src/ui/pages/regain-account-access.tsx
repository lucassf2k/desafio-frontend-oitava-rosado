import { Auth } from '../components/auth';

export function RegainAccountAccess() {
  return (
    <Auth.AuthBase>
      <Auth.Title
        title="Recuperar acesso"
        subtitle="Informe o código de recuperação enviado para o seu e-mail e recupere o acesso a sua conta."
      />
      <form>
        <Auth.Input label="Código de recuperação" htmlFor="verificationCode" />
        <Auth.Button label="Recuperar acesso" />
        <Auth.AuthLink text="Cancelar" to="/" isCancel />
      </form>
    </Auth.AuthBase>
  );
}
