import { FilterParams, SortParams } from '@constants/enums';
import { IGamesData } from './types';

async function getSortedGamesData(
  filterParam: FilterParams,
  sortParam: SortParams,
): Promise<IGamesData[]> {
  const res = await fetch(
    `https://637bace46f4024eac21566d8.mockapi.io/games?&genre=${filterParam}&sortBy=${sortParam}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default getSortedGamesData;
