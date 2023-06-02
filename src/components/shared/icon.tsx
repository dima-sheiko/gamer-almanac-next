interface IIconProps {
  href: string;
  width: string;
  height?: string;
  styles?: string;
}

export default function Icon({
  href, width, height, styles,
}: IIconProps) {
  return (
    <svg
      className={styles ?? ''}
      width={width}
      height={height ?? width}
    >
      <use xlinkHref={href} />
    </svg>
  );
}
