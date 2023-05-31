'use client';

import Search from './search';
import Select from './select';
import { filterOptions, sortOptions } from '../../constants/options';
import { useFilter, useSort } from '../../store';

export default function Settings() {
  const setFilterParam = useFilter((state) => state.setFilterParam);
  const setSortParam = useSort((state) => state.setSortParam);

  return (
    <div className="flex w-full max-w-[400px] flex-col items-center justify-center gap-5">
      <Search />
      <Select
        id="filter"
        label="Filter By"
        options={filterOptions}
        setValue={setFilterParam}
      />
      <Select
        id="sort"
        label="Sort By"
        options={sortOptions}
        setValue={setSortParam}
      />
    </div>
  );
}
