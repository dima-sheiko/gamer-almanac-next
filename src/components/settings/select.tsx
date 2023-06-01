import { ChangeEvent } from 'react';
import { Options } from '../../constants/options';

interface SelectProps<T> {
  id: string;
  label: string;
  options: Options[];
  setValue: (value: T) => void;
}

export default function Select<T>({
  id,
  label,
  options,
  setValue,
}: SelectProps<T>) {
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as T);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <label
        className="mb-1 self-start font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="w-full cursor-pointer appearance-none rounded-md border border-black/30 bg-select-arrow bg-em bg-[right_15px_center] bg-no-repeat px-5 py-3 focus:outline-none dark:bg-slate-300 dark:text-slate-800"
        onChange={onSelectChange}
        id={id}
        name={id}
      >
        {options.map((option) => (
          <option
            key={option.id}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
