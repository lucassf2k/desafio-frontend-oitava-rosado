import { Html, Text, Link } from '@react-email/components';

export type EmailProps = {
  link: string;
};

export function Email({ link }: EmailProps) {
  return (
    <Html lang="pt-BR">
      <Text>Seu link para recuperar sua senha</Text>
      <Link href={link}>{link}</Link>
    </Html>
  );
}
