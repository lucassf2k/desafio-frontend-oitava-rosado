import S from './style.module.css';

export type TitleProps = {
  title: string;
  description: string;
};

export function Title({ title, description }: TitleProps) {
  return (
    <>
      <h1 className={S.title}>{title}</h1>
      <p className={S.description}>{description}</p>
    </>
  );
}
