import { DEFAULT_DEBOUNCE_DELAY } from '@/utils/constants';

type FunctionType = (...args: any[]) => void;

// replicate lodash debounce function
export const debounce = (
  func: FunctionType,
  delay: number = DEFAULT_DEBOUNCE_DELAY,
) => {
  let timeout: number;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), delay);
  };
};
