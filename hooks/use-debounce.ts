import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useThrottle<T>(value: T, delay?: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      setThrottledValue(value);
      setIsRunning(true);
      setTimeout(() => {
        setIsRunning(false);
      }, delay ?? 500);
    }
  }, [value, delay]);

  return throttledValue;
}
