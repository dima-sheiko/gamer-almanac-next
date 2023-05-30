import getGamesData from '@/src/lib/getGamesData';

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

export default function GamePage({ params }: Params) {
  return <div>{params.id}</div>;
}
