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
  const columnWidth = 220;
  const availableColumnCount = Math.floor(innerWidth / columnWidth);
  const columnCount =
    availableColumnCount > 5
      ? availableColumnCount - (availableColumnCount % 5)
      : availableColumnCount;

  const loadingSkeletonColumnCount =
    columnCount === 1
      ? 3 // This is just workaround for the case when there is only one column available
      : columnCount;

  return (
    <>
      {Array.from({ length: loadingSkeletonColumnCount }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardSkeleton key={index.toString()} />
      ))}
    </>
  );
};
