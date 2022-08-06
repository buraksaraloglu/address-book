import { UserCard } from '@/components/UserCard';

import logo from '@/assets/logo.svg';
import { mockUser } from '@/models/user';
import styles from './styles.module.scss';

export function Main() {
  return (
    <div className={styles.app}>
      <UserCard user={mockUser} />
    </div>
  );
}
