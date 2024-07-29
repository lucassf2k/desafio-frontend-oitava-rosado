import { Link } from 'react-router-dom';
import { Container } from '../components/container';
import { ContentContainer } from '../components/content-container';
import { ContentHeader } from '../components/content-header';
import { ContentSection } from '../components/content-section';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Form } from '../components/form';

import productsIcon from '../assets/icons/products.svg';

export function RegisterAppointments() {
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
            <Link to="/appointments">
              Home {'>'} Agendamentos médicos {'>'} Criar novo agendamento
              médico
            </Link>
          </ContentHeader>
          <Form.Container>
            <Form.Title
              title="Criar novo agendamento médico"
              description="Preencha os campos abaixo para criar um novo agendamento médico"
            />
            <Form.CustomForm>
              <Form.Section>
                <Form.FieldGroup>
                  <Form.Field
                    label="Médico"
                    placeholder="Informe o nome do médico"
                  />
                  <Form.Field
                    label="Paciente"
                    placeholder="Informe o nome do paciente"
                  />
                  <Form.Field
                    label="Motivo da consulta"
                    placeholder="Informe o motivo da consulta"
                  />
                </Form.FieldGroup>
                <Form.FieldGroup>
                  <Form.Field
                    label="Data da consulta"
                    placeholder="Informe a data da consulta"
                  />
                  <Form.Field
                    label="Hora da consulta"
                    placeholder="Informe a hora da consulta"
                  />
                  <Form.Field
                    label="Local da consulta"
                    placeholder="Informe o local da consulta"
                  />
                </Form.FieldGroup>
                <Form.Section>
                  <Form.FieldArea
                    label="Observações"
                    placeholder="Escreva aqui suas observações"
                  />
                </Form.Section>
              </Form.Section>
              <Form.Actions />
            </Form.CustomForm>
          </Form.Container>
        </ContentSection>
      </ContentContainer>
    </Container>
  );
}
