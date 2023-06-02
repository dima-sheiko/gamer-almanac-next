import { create } from 'zustand';
import { FilterParams, SortParams } from '../constants/enums';
import { IFilterStore, ISearchStore, ISortStore } from './types';

export const useSearch = create<ISearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (value: string) => set({ searchQuery: value }),
}));

export const useFilter = create<IFilterStore>((set) => ({
  filterParam: FilterParams.ALL,
  setFilterParam: (value: FilterParams) => set({ filterParam: value }),
}));

export const useSort = create<ISortStore>((set) => ({
  sortParam: SortParams.TITLE,
  setSortParam: (value: SortParams) => set({ sortParam: value }),
}));
