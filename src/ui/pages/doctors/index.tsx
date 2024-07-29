import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { Container } from '../../components/container';
import productsIcon from '../../assets/icons/products.svg';
import { ContentContainer } from '../../components/content-container';
import { ContentSection } from '../../components/content-section';
import { ContentHeader } from '../../components/content-header';
import { Table } from '../../components/table';
import { ContentTitle } from '../../components/content-title';
import { InputSearch } from '../../components/input-search';
import S from './styles.module.css';

export function Doctors() {
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
            <Link to="/home">
              Home {'>'} Médicos Solicitantes ou Coordenadores
            </Link>
            <ContentTitle
              title="Médicos"
              description="Gerencie com eficiência e segurança os dados do sistema"
            >
              <Link to="/register-doctors">Novo Médico Solicitante</Link>
              <Link to="/register-doctors">Novo Médico Executante</Link>
            </ContentTitle>
          </ContentHeader>
          <Table.Container>
            <InputSearch />
            <Table.List>
              <thead>
                <tr>
                  <th className={S.tableListColLarge}>Nome</th>
                  <th>ID Médico</th>
                  <th>Médico Exec.</th>
                  <th>Conselho</th>
                  <th>Nª</th>
                  <th>CBO</th>
                  <th>CPF</th>
                  <th>RQE</th>
                  <th>Clínicas</th>
                  <th className={S.tableListColActions}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bruna Rodrigues</td>
                  <td>001</td>
                  <td>Não</td>
                  <td>CRM</td>
                  <td>21890/RN</td>
                  <td>-</td>
                  <td>125.487.458-84</td>
                  <td>-</td>
                  <td>SSNNN</td>
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
