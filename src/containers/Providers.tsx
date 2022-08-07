import { BrowserRouter } from 'react-router-dom';

import { SettingsProvider } from '@/contexts/settings';
import { UsersProvider } from '@/contexts/users';
import { SearchProvider } from '@/contexts/search';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <SettingsProvider>
    <SearchProvider>
      <UsersProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </UsersProvider>
    </SearchProvider>
  </SettingsProvider>
);
