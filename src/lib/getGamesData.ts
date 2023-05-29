import { GamesData } from './types';

async function getGamesData() {
  const res = await fetch('https://637bace46f4024eac21566d8.mockapi.io/games');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const games = (await res.json()) as GamesData[];

  return games;
}

export default getGamesData;
