import { useState, useRef } from 'react';

// Throttle hook with generic types
function useThrottle<T>(callback: (value: T) => void, delay: number) {
  const [timer, setTimer] = useState<number | null>(null);
  const lastExecuted = useRef<number>(0); // To track the last time the callback was executed

  const throttledFn = (value: T) => {
    const now = Date.now();
    if (now - lastExecuted.current >= delay) {
      callback(value); // Call the function immediately if enough time has passed
      lastExecuted.current = now; // Update the last executed time
    } else {
      if (timer) {
        clearTimeout(timer); // Clear the previous timeout if it exists
      }
      const remainingTime = delay - (now - lastExecuted.current);
      // Set the timer to call the callback when the remaining time has passed
      const newTimer = setTimeout(() => {
        callback(value);
        lastExecuted.current = Date.now(); // Update the last executed time after the delayed call
      }, remainingTime);
      setTimer(newTimer);
    }
  };

  return throttledFn;
}

export default useThrottle;
