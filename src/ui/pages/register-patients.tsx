import { Link } from 'react-router-dom';
import { Container } from '../components/container';
import { ContentContainer } from '../components/content-container';
import { ContentHeader } from '../components/content-header';
import { ContentSection } from '../components/content-section';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Form } from '../components/form';

import productsIcon from '../assets/icons/products.svg';

export function RegisterPatients() {
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
            <Link to="/patients">
              Home {'>'} Pacientes {'>'} Criar novo paciente
            </Link>
          </ContentHeader>
          <Form.Container>
            <Form.Title
              title="Criar novo paciente"
              description="Preencha os campos abaixo para criar um novo paciente no sistema"
            />
            <Form.CustomForm>
              <Form.Section title="Informações gerais">
                <Form.FieldGroup>
                  <Form.Field
                    label="Nome completo"
                    placeholder="Informe o nome do médico"
                  />
                  <Form.Field label="Sexo" placeholder="Informe o seu sexo" />
                  <Form.Field
                    label="Data de nascimento"
                    placeholder="Informe sua data de nascimento"
                  />
                </Form.FieldGroup>

                <Form.FieldGroup>
                  <Form.Field label="CPF" placeholder="Informe o seu CPF" />
                  <Form.Field label="RG" placeholder="Informe o seu RG" />
                  <Form.Field
                    label="Órgão emissor"
                    placeholder="Informe o órgão emissor"
                  />
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

              <Form.Section title="Observações">
                <Form.FieldArea
                  label="Observações"
                  placeholder="Escreva aqui suas observações"
                />
              </Form.Section>
              <Form.Actions />
            </Form.CustomForm>
          </Form.Container>
        </ContentSection>
      </ContentContainer>
    </Container>
  );
}
