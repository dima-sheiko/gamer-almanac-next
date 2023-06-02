'use client';

import { useQuery } from '@tanstack/react-query';
import NotFound from '@components/shared/404';
import Icon from '@components/shared/icon';
import getSortedGamesData from '@requests/getSortedGamesData';
import {
  useFilter,
  useSearch,
  useSort,
} from '@store/index';
import Card from './card';

export default function CardContainer() {
  const searchQuery = useSearch((state) => state.searchQuery);
  const filterParam = useFilter((state) => state.filterParam);
  const sortParam = useSort((state) => state.sortParam);

  const {
    data: games,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['games', filterParam, sortParam],
    queryFn: () => getSortedGamesData(filterParam, sortParam),
  });

  const content = games?.filter((game) => game.title
    .toLowerCase()
    .includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return (
      <Icon
        href="/icons/sprites/utils-sprite.svg#loader"
        width="40"
        styles="animate-spin self-center justify-self-center"
      />
    );
  }

  if (isError) {
    return <div className="text-xl">Whoopsie! Something went wrong 🫠</div>;
  }

  if (!content?.length) {
    return <NotFound />;
  }

  return (
    <section className="w-full">
      <ul className="grid grid-cols-auto-full justify-center gap-10 sm:grid-cols-auto-400">
        {content?.map((game) => (
          <li key={game.id}>
            <Card game={game} />
          </li>
        ))}
      </ul>
    </section>
  );
}
