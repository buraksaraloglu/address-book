import { useState, useEffect } from 'react';

import { DEFAULT_DEBOUNCE_DELAY } from '@/utils/constants';

export const useDebounce = (value: any, delay = DEFAULT_DEBOUNCE_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
