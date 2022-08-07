import { useDebounce } from '@/hooks';
import { createContext, useState, useContext, useMemo } from 'react';

interface SettingsContext {
  debouncedSearch: string;
  search: string;
  setSearch: (s: string) => void;
}

const defaultSettings: SettingsContext = {
  debouncedSearch: '',
  search: '',
  setSearch: () => null,
};

export const SearchContext = createContext(defaultSettings);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);

  const value = useMemo(
    () => ({
      search,
      debouncedSearch,
      setSearch,
    }),
    [search, debouncedSearch, setSearch],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
