import S from './styles.module.css';

export type LinkToCancelProps = {
  to: string;
};

export function LinkToCancel({ to }: LinkToCancelProps) {
  return (
    <div className={S.linkToCancelContainer}>
      <a href={to}>Cancelar</a>
    </div>
  );
}
