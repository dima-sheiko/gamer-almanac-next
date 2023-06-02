import Icon from '../shared/icon';

interface GameInfoItemProps {
  id: string;
  title: string | number;
}

export default function GameInfoItem({ id, title }: GameInfoItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        href={`/icons/sprites/card-sprite.svg#${id}`}
        width="16"
      />
      {title}
    </div>
  );
}
