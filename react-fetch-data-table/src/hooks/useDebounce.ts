import { useState } from 'react';

// Debounce hook with generic types
function useDebounce<T>(callback: (value: T) => void, delay: number) {
  const [timer, setTimer] = useState<number | null>(null);

  const debouncedFn = (value: T) => {
    if (timer) {
      clearTimeout(timer); // Clear the previous timeout
    }
    const newTimer = setTimeout(() => {
      callback(value); // Invoke the callback after the delay
    }, delay);
    setTimer(newTimer);
  };

  return debouncedFn;
}

export default useDebounce;
