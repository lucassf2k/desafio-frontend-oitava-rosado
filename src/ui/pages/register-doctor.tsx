import { Link } from 'react-router-dom';
import productsIcon from '../assets/icons/products.svg';
import { Container } from '../components/container';
import { Sidebar } from '../components/sidebar';
import { ContentContainer } from '../components/content-container';
import { Header } from '../components/header';
import { ContentSection } from '../components/content-section';
import { ContentHeader } from '../components/content-header';
import { Form } from '../components/form';

export function RegisterDoctor() {
  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <Header.Main>
          <Header.Notification text="99+" />
          <Header.Icon src={productsIcon} alt="Ícone de produtos" />
        </Header.Main>
        <ContentSection>
          <ContentHeader>
            <Link to="/doctors">
              Home {'>'} Médicos {'>'} Criar novo médico
            </Link>
          </ContentHeader>
          <Form.Container>
            <Form.Title
              title="Criar novo médico"
              description="Preencha os campos abaixo para criar um novo médico no sistema"
            />
            <Form.CustomForm>
              <Form.Section title="Informações gerais">
                <Form.FieldGroup>
                  <Form.Field
                    label="Nome completo"
                    placeholder="Informe o nome do médico"
                  />
                  <Form.Field
                    label="Conselho"
                    placeholder="Informe o conselho"
                  />
                  <Form.Field
                    label="UF conselho"
                    placeholder="Informe UF conselho"
                  />
                </Form.FieldGroup>

                <Form.FieldGroup>
                  <Form.Field
                    label="Nª do conselho"
                    placeholder="Informe um número do conselho"
                  />
                  <Form.Field
                    label="Classificação Brasileira de Ocupações (CBO)"
                    placeholder="Informe a CBO"
                  />
                  <Form.Field label="CPF" placeholder="Informe o CPF" />
                </Form.FieldGroup>
              </Form.Section>

              <Form.Section title="Endereço">
                <Form.FieldGroup>
                  <Form.Field label="Logradouro" placeholder="Informe a rua" />
                  <Form.Field label="Bairro" placeholder="Informe o bairro" />
                  <Form.Field label="Cidade" placeholder="Informe a cidade" />
                </Form.FieldGroup>

                <Form.FieldGroup>
                  <Form.Field label="UF" placeholder="Informe a UF" />
                  <Form.Field label="CEP" placeholder="Informe o seu CEP" />
                </Form.FieldGroup>
              </Form.Section>

              <Form.Section title="Contato">
                <Form.FieldGroup>
                  <Form.Field
                    label="Telefone"
                    placeholder="Informe um número de telefone"
                  />
                  <Form.Field
                    label="E-mail"
                    placeholder="Informe um e-mail válido"
                  />
                </Form.FieldGroup>
              </Form.Section>
              <Form.Actions />
            </Form.CustomForm>
          </Form.Container>
        </ContentSection>
      </ContentContainer>
    </Container>
  );
}
