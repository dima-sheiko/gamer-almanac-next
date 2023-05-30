import { FilterParams, SortParams } from '../constants/enums';
import { GamesData } from './types';

async function getGamesData(
  filterParam: FilterParams,
  sortParam: SortParams,
): Promise<GamesData[]> {
  const res = await fetch(
    `https://637bace46f4024eac21566d8.mockapi.io/games?&genre=${filterParam}&sortBy=${sortParam}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default getGamesData;
