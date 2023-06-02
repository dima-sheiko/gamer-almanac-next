'use client';

import { useEffect, useState } from 'react';
import Icon from './shared/icon';

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleButton = () => {
    setIsVisible(window.scrollY > 1200);
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);

    return () => window.removeEventListener('scroll', handleVisibleButton);
  }, []);

  return isVisible ? (
    <button
      className="fixed bottom-0 right-0 animate-bounce p-4 motion-reduce:animate-none dark:text-emerald-300 sm:p-5"
      onClick={handleScrollUp}
      type="button"
    >
      <Icon
        href="icons/sprites/utils-sprite.svg#arrow"
        width="40"
      />
    </button>
  ) : null;
}
