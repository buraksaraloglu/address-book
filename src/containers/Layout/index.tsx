import { NavigationButton } from '@/components/NavigationButton';
import { SearchContainer } from '../Search';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.header}>
    <NavigationButton to="/">Browse</NavigationButton>

    <SearchContainer />

    <NavigationButton to="settings">Settings</NavigationButton>
  </header>
);

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className={styles.appContainer}>
    <Header />
    {children}
  </main>
);
