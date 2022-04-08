export function throttle(f: (...args: unknown[]) => unknown, delay: number) {
  let isRun = false;
  let timerId: NodeJS.Timeout;

  return function wrapper(...args: unknown[]) {
    if (!isRun) {
      f(...args);
      isRun = true;

      setTimeout(() => {
        isRun = false;
      }, delay);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => f(...args), delay);
  };
}
