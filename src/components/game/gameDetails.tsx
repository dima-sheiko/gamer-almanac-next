import Icon from '@components/shared/icon';
import { IGamesData } from '@requests/types';

interface IGameDetailsProps {
  game: IGamesData;
}

export default function GameDetails({ game }: IGameDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-5 self-start xl:max-w-md">
      <h2 className="text-center text-2xl font-bold xl:text-start">
        {game.title}
      </h2>
      <p className="text-center dark:text-slate-300 xl:text-start">
        {game.description}
      </p>
      <a
        href={game.link}
        target="_blank"
        rel="noreferrer"
        className="w-full flex justify-center items-center gap-1 max-w-[448px] self-center rounded-md bg-emerald-300 px-5 py-3 text-center font-medium text-slate-800 shadow-md hover:bg-emerald-400 active:bg-emerald-500 xl:max-w-none"
      >
        <span>Get It on Steam</span>
        <Icon
          width="15"
          href="/icons/sprites/utils-sprite.svg#external-link"
        />
      </a>
    </div>
  );
}
