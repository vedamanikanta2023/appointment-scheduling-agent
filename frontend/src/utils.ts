
export function debounce(fn: (...args: any[]) => any, delay = 300) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}