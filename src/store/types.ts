import { FilterParams, SortParams } from '@constants/enums';

export interface ISearchStore {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export interface IFilterStore {
  filterParam: FilterParams;
  setFilterParam: (value: FilterParams) => void;
}

export interface ISortStore {
  sortParam: SortParams;
  setSortParam: (value: SortParams) => void;
}
