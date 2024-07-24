import { Auth } from '.';

export type AuthBaseProps = {
  children: React.ReactNode;
};

export function AuthBase({ children }: AuthBaseProps) {
  return (
    <Auth.Container>
      <Auth.VerticalBanner />
      <Auth.FormContainer>
        <Auth.FormContent>
          <Auth.FormTitle
            title="Acessar conta"
            subtitle="Bem-vindo(a)! Por favor, digite suas credenciais para ter acesso ao
        sistema."
          />
          {children}
        </Auth.FormContent>
      </Auth.FormContainer>
    </Auth.Container>
  );
}
