import { FilterParams, SortParams } from './enums';

export interface Options {
  id: number;
  name: string;
  value: FilterParams | SortParams;
}

export const filterOptions: Options[] = [
  { id: 1, name: 'All Genres', value: FilterParams.ALL },
  { id: 2, name: 'Action', value: FilterParams.ACTION },
  { id: 3, name: 'Shooter', value: FilterParams.SHOOTER },
  { id: 4, name: 'RPG', value: FilterParams.RPG },
  { id: 5, name: 'Metroidvania', value: FilterParams.METROIDVANIA },
  { id: 6, name: 'Soulslike', value: FilterParams.SOULSLIKE },
  { id: 7, name: 'Survival Horror', value: FilterParams.SURVIVAL },
  { id: 8, name: 'Rogue Like', value: FilterParams.ROGUE },
  { id: 9, name: 'Quest', value: FilterParams.QUEST },
];

export const sortOptions: Options[] = [
  { id: 1, name: 'Title', value: SortParams.TITLE },
  { id: 2, name: 'Developer', value: SortParams.DEVELOPER },
  { id: 3, name: 'Year', value: SortParams.YEAR },
];
