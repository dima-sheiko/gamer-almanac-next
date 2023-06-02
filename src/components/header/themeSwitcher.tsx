'use client';

import useColorMode from '@/src/hooks/useColorMode';
import { useEffect, useState } from 'react';
import Icon from '../shared/icon';

export default function ThemeSwitcher() {
  const [colorMode, setColorMode] = useColorMode();
  const [renderedMode, setRenderedMode] = useState<string>('light');

  useEffect(() => {
    setRenderedMode(colorMode);
  }, [colorMode]);

  const handleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="rounded-full"
      onClick={handleColorMode}
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
