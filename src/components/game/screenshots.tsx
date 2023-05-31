'use client';

import { GamesData } from '@/src/lib/types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface ScreenshotsProps {
  game: GamesData;
}

export default function Screenshots({ game }: ScreenshotsProps) {
  return (
    <div className="max-h-[435px] w-full max-w-3xl rounded-md border-2 border-black bg-black p-0 shadow-md">
      <Splide
        options={{
          paginationKeyboard: true,
        }}
      >
        {game.screenshots.map((pic) => (
          <SplideSlide key={pic}>
            <picture>
              <img
                src={pic}
                alt="game screenshot"
              />
            </picture>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
