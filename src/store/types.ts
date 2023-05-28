import { FilterParams, SortParams } from '../constants/enums';

export interface SearchStore {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export interface FilterStore {
  filterParam: FilterParams;
  setFilterParam: (value: FilterParams) => void;
}

export interface SortStore {
  sortParam: SortParams;
  setSortParam: (value: SortParams) => void;
}
