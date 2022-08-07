import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';

import { SearchNationalities, LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { getSearchNationalityFromLocalStorage } from '@/utils/helpers';

interface SettingsContext {
  searchNationality: SearchNationalities;
  setSearchNationality: (searchNationality: SearchNationalities) => void;
}

const defaultSettings: SettingsContext = {
  searchNationality: getSearchNationalityFromLocalStorage(),
  setSearchNationality: () => null,
};

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchNationality, setSearchNationality] = useState(
    defaultSettings.searchNationality,
  );

  const handleSearchNationalityChange = useCallback(
    (nation: SearchNationalities) => {
      setSearchNationality(nation);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.SEARCH_NATIONALITIES,
        JSON.stringify(nation),
      );
    },
    [setSearchNationality],
  );

  const value = useMemo(
    () => ({
      searchNationality,
      setSearchNationality: handleSearchNationalityChange,
    }),
    [searchNationality, handleSearchNationalityChange],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a SettingsProvider');
  }
  return context;
};
