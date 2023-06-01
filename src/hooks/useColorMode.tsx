import { useEffect } from 'react';
import useCookie from './useCookie';

const useColorMode = () => {
  const [colorMode, setColorMode] = useCookie('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = document.documentElement.classList;

    if (colorMode === 'dark') {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
};

export default useColorMode;
