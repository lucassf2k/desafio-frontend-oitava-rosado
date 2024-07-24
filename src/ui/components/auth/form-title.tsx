export type FormTitleProps = {
  title: string;
  subtitle: string;
};

export function FormTitle({ title, subtitle }: FormTitleProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
}
