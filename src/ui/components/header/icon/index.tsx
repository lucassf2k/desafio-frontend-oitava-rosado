export type IconProps = {
  src: string;
  alt: string;
};

export function Icon({ src, alt }: IconProps) {
  return <img src={src} alt={alt} />;
}
