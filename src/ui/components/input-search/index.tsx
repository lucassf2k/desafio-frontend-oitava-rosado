import searchIcon from '../../assets/icons/search.svg';

import S from './styles.module.css';

export function InputSearch() {
  return (
    <div className={S.inputSearch}>
      <img src={searchIcon} alt="Ícone de buscar" />
      <input type="search" placeholder="Pesquisar" />
    </div>
  );
}
