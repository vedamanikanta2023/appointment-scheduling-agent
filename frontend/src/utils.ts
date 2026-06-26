
export function debounce(fn: (...args: any[]) => any, delay = 300) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


export function customThrottle(fn: Function, delay = 300) {
  let last = 0;
  return function (...args: any) {
    let now = Date.now();
    const difference = now - last;
    if (difference >= delay) {
      fn(...args);
      last = now;
    }
  };
}