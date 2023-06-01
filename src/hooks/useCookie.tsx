import { useState, useEffect } from 'react';

const getItem = (key: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  return document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=');
    const storedKey = item[0];
    const storedValue = item[1];

    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');
};

const setItem = (key: string, value: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${key}=${value}`;
};

const useCookie = (key: string, defaultValue: string) => {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());

  useEffect(() => {
    setCookie(getCookie());
  }, [key]);

  const updateCookie = (value: string) => {
    setCookie(value);
    setItem(key, value);
  };

  return [cookie, updateCookie] as const;
};

export default useCookie;
