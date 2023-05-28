'use client';

import { ChangeEvent, useCallback, useState } from 'react';
import Image from 'next/image';
import { useSearch } from '../store';
import debounce from '../utils/debounce';

export default function Search() {
  const [value, setValue] = useState('');
  const { setSearchQuery } = useSearch();

  const debounceSearch = useCallback(
    debounce((query) => setSearchQuery(query), 500),
    [],
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceSearch(e.target.value);
  };

  const clearInput = () => {
    setValue('');
    setSearchQuery('');
  };

  return (
    <div className="relative w-[300px] sm:w-[400px]">
      <input
        className="w-full rounded-md border border-black/30 py-3 pl-5 pr-9 focus:outline-none"
        value={value}
        onChange={onInputChange}
        type="text"
        name="search"
        placeholder="Find your favorite game..."
      />
      {value && (
        <button
          className="absolute right-[10px] top-[15px]"
          onClick={clearInput}
          type="button"
        >
          <Image
            width={20}
            height={20}
            src="/x.svg"
            alt="clear search"
          />
        </button>
      )}
    </div>
  );
}
