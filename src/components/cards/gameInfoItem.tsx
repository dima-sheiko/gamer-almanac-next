import Icon from '@components/shared/icon';

interface IGameInfoItemProps {
  id: string;
  title: string | number;
}

export default function GameInfoItem({ id, title }: IGameInfoItemProps) {
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
