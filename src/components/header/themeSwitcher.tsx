'use client';

import { useEffect, useState } from 'react';
import Icon from '@components/shared/icon';
import useColorMode from '@hooks/useColorMode';

export default function ThemeSwitcher() {
  const [colorMode, setColorMode] = useColorMode();
  const [renderedMode, setRenderedMode] = useState<string>('light');

  useEffect(() => {
    setRenderedMode(colorMode);
  }, [colorMode]);

  const handleClick = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="rounded-full"
      onClick={handleClick}
      type="button"
    >
      {renderedMode === 'light' ? (
        <Icon
          href="/icons/sprites/theme-sprite.svg#moon"
          width="24"
        />
      ) : (
        <Icon
          href="/icons/sprites/theme-sprite.svg#sun"
          width="24"
        />
      )}
    </button>
  );
}
