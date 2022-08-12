import { useRef, useCallback, useEffect } from 'react';

import { useUsers } from '@/contexts/users';
import { UserCard } from '@/components/UserCard';

import { CardsSkeletonContainer } from '@/components/CardSkeleton';
import { MAX_USER_COUNT_TO_FETCH } from '@/utils/constants';

import styles from './styles.module.scss';

export const UsersContainer = () => {
  const { users, isLoading, fetchNextPage, error, pagination } = useUsers();

  const bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback(
    (node: Element) => {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (
            !entry.isIntersecting ||
            isLoading ||
            !users.length ||
            users.length >= MAX_USER_COUNT_TO_FETCH
          ) {
            return;
          }

          fetchNextPage({ page: pagination.page + 1, seed: pagination.seed });
        });
      }).observe(node);
    },
    [isLoading, users, fetchNextPage],
  );

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  return (
    <div className={styles.usersContainer}>
      {users.map((user, index) => (
        <UserCard key={user.id} user={user} index={index} />
      ))}
      {isLoading && <CardsSkeletonContainer />}
      {error && <div>{error}</div>}
      <div ref={bottomBoundaryRef} />
    </div>
  );
};
