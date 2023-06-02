'use client';

import Search from './search';
import Select from './select';
import { FilterOptions, SortOptions } from '../../constants/options';
import { useFilter, useSort } from '../../store';

export default function Settings() {
  const setFilterParam = useFilter((state) => state.setFilterParam);
  const setSortParam = useSort((state) => state.setSortParam);

  return (
    <form className="flex w-full max-w-[400px] flex-col items-center justify-center gap-5">
      <Search />
      <Select
        id="filter"
        label="Filter By"
        options={FilterOptions}
        setValue={setFilterParam}
      />
      <Select
        id="sort"
        label="Sort By"
        options={SortOptions}
        setValue={setSortParam}
      />
    </form>
  );
}
