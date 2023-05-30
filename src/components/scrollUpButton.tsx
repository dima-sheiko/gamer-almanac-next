'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
      className="fixed bottom-0 right-0 animate-bounce p-4 motion-reduce:animate-none sm:p-5"
      onClick={handleScrollUp}
      type="button"
    >
      <Image
        src="/arrow.svg"
        alt="scroll up to the top"
        width={40}
        height={40}
      />
    </button>
  ) : null;
}
