import { Auth } from '../components/auth';

export function ChangeAccountPassword() {
  return (
    <Auth.AuthBase>
      <Auth.Title
        title="Alterar senha"
        subtitle="Altere sua senha e recupere o acesso ao sistema."
      />
      <form>
        <Auth.Input label="Senha" htmlFor="password" type="password" />
        <Auth.Input
          label="Confirmação de senha"
          htmlFor="confirmPassword"
          type="password"
        />
        <Auth.Button label="Confirmar alteração" />
        <Auth.AuthLink text="Cancelar" to="/" isCancel />
      </form>
    </Auth.AuthBase>
  );
}
