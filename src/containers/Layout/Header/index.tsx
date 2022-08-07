import { useLocation } from 'react-router-dom';

import { SearchContainer } from '@/containers/Search';
import { NavigationButton } from '@/components/NavigationButton';
import { useSearch } from '@/contexts/search';

import styles from './styles.module.scss';

export const Header = () => {
  const { setSearch } = useSearch();
  const location = useLocation();

  const homeRoute = '/';

  const handleHomeRouteClick = () => {
    if (location.pathname === homeRoute) {
      setSearch('');
    }
  };

  return (
    <header className={styles.header}>
      <NavigationButton
        clickable={location.pathname !== homeRoute}
        onClick={handleHomeRouteClick}
        to={homeRoute}
      >
        Browse
      </NavigationButton>

      <SearchContainer />

      <NavigationButton to="settings">Settings</NavigationButton>
    </header>
  );
};
