const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay = 300,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

export default debounce;
