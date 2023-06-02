import { ChangeEvent, useCallback, useState } from 'react';
import Icon from '@components/shared/icon';
import { useSearch } from '@store/index';
import debounce from '@utils/debounce';

export default function Search() {
  const [value, setValue] = useState('');
  const setSearchQuery = useSearch((state) => state.setSearchQuery);

  const debounceSearch = useCallback(
    debounce((query) => setSearchQuery(query), 500),
    [],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceSearch(e.target.value);
  };

  const handleClick = () => {
    setValue('');
    setSearchQuery('');
  };

  return (
    <div className="relative w-full">
      <input
        className="w-full rounded-md border border-black/30 py-3 pl-5 pr-9 text-slate-800 focus:outline-none dark:bg-slate-300 dark:placeholder:text-slate-800"
        value={value}
        onChange={handleInputChange}
        type="text"
        name="search"
        placeholder="Find your favorite game..."
      />
      {value && (
        <button
          className="absolute right-[10px] top-2/4 -translate-y-2/4"
          onClick={handleClick}
          type="button"
        >
          <Icon
            width="18"
            href="/icons/sprites/utils-sprite.svg#x"
          />
        </button>
      )}
    </div>
  );
}
