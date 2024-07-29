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

export function Patients() {
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
            <Link to="/home">Home {'>'} Pacientes</Link>
            <ContentTitle
              title="Pacientes"
              description="Gerencie com eficiência e segurança os dados do sistema"
            >
              <Link to="/register-patients">Novo Paciente</Link>
            </ContentTitle>
          </ContentHeader>
          <Table.Container>
            <InputSearch />
            <Table.List>
              <thead>
                <tr>
                  <th>ID</th>
                  <th className={S.tableListColLarge}>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Sexo</th>
                  <th>Nascimento</th>
                  <th className={S.tableListColLarge}>Observações</th>
                  <th className={S.tableListColActions}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Bruna Rodrigues</td>
                  <td>125.487.458-84</td>
                  <td>8499604587</td>
                  <td>Masculino</td>
                  <td>02/05/1999</td>
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
