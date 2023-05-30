import { GamesData } from '@/src/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  game: GamesData;
}

export default function Card({ game }: CardProps) {
  return (
    <Link href={`/games/${game.title}`}>
      <div className="relative flex flex-col rounded-md bg-white shadow-md duration-500 hover:scale-105">
        <Image
          className="rounded-t-md"
          src={game.header}
          alt="game artwork"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="flex flex-col justify-start gap-2 p-5">
          <p className="text-lg font-medium">{game.title}</p>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-t-md"
              src="/wrench.svg"
              alt="developer icon"
              width={16}
              height={16}
            />
            <p>{game.developer}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-t-md"
              src="/gamepad.svg"
              alt="genre icon"
              width={16}
              height={16}
            />
            <p>{game.genre}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-t-md"
              src="/calendar.svg"
              alt="release date icon"
              width={16}
              height={16}
            />
            <p>{game.year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
