import { Container } from '../../components/container';
import { ContentContainer } from '../../components/content-container';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import productsIcon from '../../assets/icons/products.svg';
import { ContentSection } from '../../components/content-section';
import { ContentHeader } from '../../components/content-header';
import { Link } from 'react-router-dom';
import { ContentTitle } from '../../components/content-title';
import { Table } from '../../components/table';
import { InputSearch } from '../../components/input-search';

import S from './styles.module.css';

export function Appointments() {
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
            <Link to="/home">Home {'>'} Agendamentos</Link>
            <ContentTitle
              title="Agendamentos médicos"
              description="Gerencie com eficiência e segurança os dados do sistema"
            >
              <Link to="/register-appointments">Novo agendamento</Link>
            </ContentTitle>
          </ContentHeader>
          <Table.Container>
            <InputSearch />
            <Table.List>
              <thead>
                <tr>
                  <th>Médico - CRM</th>
                  <th>Paciente - ID</th>
                  <th>Data e hora</th>
                  <th>Observações</th>
                  <th className={S.tableListColActions}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Leticia Dayanne Maia Caetano - (RN8265)</td>
                  <td>Thaisa Helena de Paula Azanha - (0002)</td>
                  <td>03/03/2022 às 08h30</td>
                  <td>-</td>
                  <td className={S.tableListActions}>
                    <button>Editar</button>
                    <button className={S.delete}>Apagar</button>
                  </td>
                </tr>
              </tbody>
            </Table.List>
          </Table.Container>
        </ContentSection>
      </ContentContainer>
    </Container>
  );
}
