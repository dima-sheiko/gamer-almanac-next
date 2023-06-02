import { IGamesData } from '@/src/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import GameInfoItem from './gameInfoItem';

interface ICardProps {
  game: IGamesData;
}

export default function Card({ game }: ICardProps) {
  return (
    <Link href={`/games/${game.id}`}>
      <div className="relative flex flex-col rounded-md bg-white text-slate-800 shadow-md duration-500 hover:scale-105 dark:bg-slate-300">
        <Image
          className="rounded-t-md"
          src={game.header}
          alt="game artwork"
          width={0}
          height={0}
          sizes="100vw"
          priority={game.id === '19'}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="flex flex-col justify-start gap-2 p-5">
          <h3 className="text-lg font-medium">{game.title}</h3>
          <GameInfoItem
            id="wrench"
            title={game.developer}
          />
          <GameInfoItem
            id="gamepad"
            title={game.genre}
          />
          <GameInfoItem
            id="calendar"
            title={game.year}
          />
        </div>
      </div>
    </Link>
  );
}
