import { GamesData } from '@/src/lib/types';
import Icon from '../shared/icon';

interface GameDetailsProps {
  game: GamesData;
}

export default function GameDetails({ game }: GameDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-5 self-start xl:max-w-md">
      <h2 className="text-center text-2xl font-bold underline xl:text-start">
        {game.title}
      </h2>
      <p className="text-center xl:text-start dark:text-slate-300">{game.description}</p>
      <a
        href={game.link}
        target="_blank"
        className="w-full max-w-[448px] self-center rounded-md bg-emerald-300 px-5 py-3 text-center text-slate-800 font-medium shadow-md hover:bg-emerald-400 active:bg-emerald-500 xl:max-w-none"
      >
        <div className="flex justify-center gap-2">
          <p>Get It on Steam</p>
          <Icon
            width="15"
            href="/icons/sprites/utils-sprite.svg#external-link"
          />
        </div>
      </a>
    </div>
  );
}
