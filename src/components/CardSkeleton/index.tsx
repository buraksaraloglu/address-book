import Skeleton from 'react-loading-skeleton';

import styles from './styles.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardSkeleton = () => (
  <div className={styles.cardSkeleton}>
    <Skeleton height={window.innerWidth < 768 ? 70 : 200} borderRadius={8} />
    <div>
      <Skeleton height={window.innerWidth < 768 ? 20 : undefined} />
      <Skeleton height={window.innerWidth < 768 ? 16 : undefined} count={2} />
    </div>
  </div>
);

export const CardsSkeletonContainer = () => {
  const { innerWidth } = window;

  const loadingSkeletonColumnCount =
    Math.floor(innerWidth / 220) === 1
      ? 3
      : Math.floor(innerWidth / 220) - (Math.floor(innerWidth / 220) % 5);

  return (
    <>
      {Array.from({ length: loadingSkeletonColumnCount }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardSkeleton key={index.toString()} />
      ))}
    </>
  );
};
