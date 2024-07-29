import S from './styles.module.css';

export type ListProps = {
  children: React.ReactNode;
};

export function List({ children }: ListProps) {
  return <table className={S.tableList}>{children}</table>;
}
