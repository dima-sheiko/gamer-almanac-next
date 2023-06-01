interface GameInfoItemProps {
  id: string;
  title: string | number;
}

export default function GameInfoItem({ id, title }: GameInfoItemProps) {
  return (
    <div className="flex items-center gap-2">
      <svg
        height="16"
        width="16"
      >
        <use xlinkHref={`/card-sprite.svg#${id}`} />
      </svg>
      {title}
    </div>
  );
}
