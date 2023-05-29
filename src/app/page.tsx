'use client';

import Search from '../components/search';
import Select from '../components/select';
import { filterOptions, sortOptions } from '../constants/options';
import { useFilter, useSort } from '../store';

export default function Home() {
  const setFilterParam = useFilter((state) => state.setFilterParam);
  const setSortParam = useSort((state) => state.setSortParam);

  return (
    <main className="mt-10 flex flex-col items-center justify-start gap-10">
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
    </main>
  );
}
