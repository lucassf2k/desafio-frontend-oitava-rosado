import { Auth } from '../components/auth';

export function SignUp() {
  return (
    <Auth.AuthBase>
      <Auth.Title
        title="Criar conta"
        subtitle="Preencha as informações abaixo para criar uma nova conta no sistema."
      />
      <form>
        <Auth.Input label="Nome" htmlFor="name" id="name" />
        <Auth.Input label="E-mail" htmlFor="email" id="email" type="email" />
        <Auth.Input
          label="Senha"
          htmlFor="password"
          id="password"
          type="password"
        />
        <Auth.Input
          label="Confirmação de Senha"
          htmlFor="confirmPassword"
          id="confirmPassword"
          type="password"
        />
      </form>
      <Auth.Button label="Finalizar cadastro" />
      <Auth.AuthLink text="Cancelar" to="/" isCancel />
    </Auth.AuthBase>
  );
}
