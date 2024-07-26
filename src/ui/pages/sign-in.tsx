import { Auth } from '../components/auth';
import { AuthBase } from '../components/auth/auth-base';

export function SignIn() {
  return (
    <AuthBase>
      <Auth.Title
        title="Acessar conta"
        subtitle="Bem-vindo(a)! Por favor, digite suas credenciais para ter acesso ao
        sistema."
      />
      <form>
        <Auth.Input label="Usuário" htmlFor="email" id="email" type="email" />
        <Auth.InputPassword label="Senha" htmlFor="password" id="password" />
        <Auth.Button label="Entrar na conta" />
        <Auth.AuthLink text="Esqueceu senha?" to="/regain-access" />
      </form>
    </AuthBase>
  );
}
