import { Auth } from '.';

export type AuthBaseProps = {
  children: React.ReactNode;
};

export function AuthBase({ children }: AuthBaseProps) {
  return (
    <Auth.Container>
      <Auth.VerticalBanner />
      <Auth.FormContainer>
        <Auth.FormContent>{children}</Auth.FormContent>
      </Auth.FormContainer>
    </Auth.Container>
  );
}
