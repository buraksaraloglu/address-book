import { Header } from './Header';
import styles from './styles.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className={styles.appContainer}>
    <Header />
    {children}
  </main>
);
