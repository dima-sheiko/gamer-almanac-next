import { IGamesData } from './types';

async function getGamesData(): Promise<IGamesData[]> {
  const res = await fetch('https://637bace46f4024eac21566d8.mockapi.io/games', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default getGamesData;
