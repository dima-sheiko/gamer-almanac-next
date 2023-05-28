import { create } from 'zustand';
import { FilterParams, SortParams } from '../constants/enums';
import { FilterStore, SearchStore, SortStore } from './types';

export const useSearch = create<SearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (value: string) => set({ searchQuery: value }),
}));

export const useFilter = create<FilterStore>((set) => ({
  filterParam: FilterParams.ALL,
  setFilterParam: (value: FilterParams) => set({ filterParam: value }),
}));

export const useSort = create<SortStore>((set) => ({
  sortParam: SortParams.TITLE,
  setSortParam: (value: SortParams) => set({ sortParam: value }),
}));
