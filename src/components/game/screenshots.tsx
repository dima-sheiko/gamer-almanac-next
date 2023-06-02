'use client';

import { IGamesData } from '@/src/lib/types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

interface IScreenshotsProps {
  game: IGamesData;
}

export default function Screenshots({ game }: IScreenshotsProps) {
  return (
    <div className="max-h-[435px] w-full max-w-3xl rounded-md border-2 border-black bg-black p-0 shadow-md dark:border-emerald-300">
      <Splide
        options={{
          paginationKeyboard: true,
        }}
      >
        {game.screenshots.map((pic) => (
          <SplideSlide key={pic}>
            <Image
              src={pic}
              alt="game screenshot"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
