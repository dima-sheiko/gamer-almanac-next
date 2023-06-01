'use client';

import useColorMode from '@/src/hooks/useColorMode';
import { useEffect, useState } from 'react';

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
        <svg
          height="24"
          width="24"
        >
          <use xlinkHref="/theme-sprite.svg#moon" />
        </svg>
      ) : (
        <svg
          height="24"
          width="24"
        >
          <use xlinkHref="/theme-sprite.svg#sun" />
        </svg>
      )}
    </button>
  );
}
