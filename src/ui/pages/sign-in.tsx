import { useSelector } from 'react-redux';
import { Auth } from '../components/auth';
import { AuthBase } from '../components/auth/auth-base';
import { useAuth } from '../../infra/redux/slice-auth';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { InputError } from '../components/input-errror';

export function SignIn() {
  const { isAuthenticated } = useSelector(useAuth);
  const navigate = useNavigate();
  const [isError] = useState(true);

  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated]);

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
