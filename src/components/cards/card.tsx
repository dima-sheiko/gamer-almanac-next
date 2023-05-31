import { GamesData } from '@/src/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import GameInfoItem from './gameInfoItem';

interface CardProps {
  game: GamesData;
}

export default function Card({ game }: CardProps) {
  return (
    <Link href={`/games/${game.id}`}>
      <div className="relative flex flex-col rounded-md bg-white shadow-md duration-500 hover:scale-105">
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
          <p className="text-lg font-medium">{game.title}</p>
          <GameInfoItem
            src="/wrench.svg"
            alt="developer icon"
            title={game.developer}
          />
          <GameInfoItem
            src="/gamepad.svg"
            alt="gamepad icon"
            title={game.genre}
          />
          <GameInfoItem
            src="/calendar.svg"
            alt="relase date icon"
            title={game.year}
          />
        </div>
      </div>
    </Link>
  );
}
