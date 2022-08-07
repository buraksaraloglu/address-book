import { createContext, useState, useContext, useMemo } from 'react';

import { SearchNationalities } from '@/utils/constants';

interface SettingsContext {
  searchNationality: SearchNationalities;
  setSearchNationality: (searchNationality: SearchNationalities) => void;
}

const defaultSettings: SettingsContext = {
  searchNationality: SearchNationalities.GB,
  setSearchNationality: () => null,
};

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchNationality, setSearchNationality] = useState(
    SearchNationalities.GB,
  );

  const value = useMemo(
    () => ({
      searchNationality,
      setSearchNationality,
    }),
    [searchNationality, setSearchNationality],
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
