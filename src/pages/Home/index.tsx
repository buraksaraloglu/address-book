import { UsersContainer } from '@/containers/Users';
import styles from './styles.module.scss';

export const Home = () => (
  <div className={styles.app}>
    <UsersContainer />
  </div>
);
