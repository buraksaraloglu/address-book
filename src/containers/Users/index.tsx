import { useUsers } from '@/contexts/users';
import { UserCard } from '@/components/UserCard';

import { CardsSkeletonContainer } from '@/components/CardSkeleton';
import styles from './styles.module.scss';

export const UsersContainer = () => {
  const { users, isLoading } = useUsers();

  return (
    <div className={styles.usersContainer}>
      {isLoading ? (
        <CardsSkeletonContainer />
      ) : (
        users.map((user, index) => (
          <UserCard key={user.id} user={user} index={index} />
        ))
      )}
    </div>
  );
};
