import { notFound } from 'next/navigation';
import getGamesData from '@/src/lib/getGamesData';
import Screenshots from '@/src/components/game/screenshots';
import GameDetails from '@/src/components/game/gameDetails';

interface Params {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const games = await getGamesData();

  return games.map((game) => ({
    id: game.id,
  }));
}

export async function generateMetadata({ params }: Params) {
  const games = await getGamesData();
  const { id } = params;

  const game = games.find((x) => x.id === id);

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return {
    title: game.title,
  };
}

export default async function GamePage({ params }: Params) {
  const games = await getGamesData();
  const game = games.find((x) => x.id === params.id);

  if (!game) notFound();

  return (
    <main className="mt-14 flex flex-col justify-center items-center gap-10 xl:flex-row xl:mt-20">
      <Screenshots game={game} />
      <GameDetails game={game} />
    </main>
  );
}
