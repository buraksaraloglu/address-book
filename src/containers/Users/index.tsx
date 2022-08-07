import { useUsers } from '@/contexts/users';
import { UserCard } from '@/components/UserCard';

import styles from './styles.module.scss';

export const UsersContainer = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.usersContainer}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
