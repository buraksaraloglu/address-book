import { useState } from 'react';

import type { User } from '@/models/user';
import classNames from 'classnames';
import { ModalOverlay } from '../ModalOverlay';
import styles from './styles.module.scss';

interface UserCardProps {
  user: User;
  index?: number;
}

const UserAddress = ({ user }: { user: User }) => (
  <div className={styles.userAddress}>
    <b className={styles.userAddressLine}>Address:</b>
    <div className={styles.userAddressLine}>
      {Object.values(user.location.street).join(' ')}
    </div>
    <div className={styles.userAddressLine}>
      {user.location.city}, {user.location.state}
    </div>
    <div className={styles.userAddressLine}>{user.location.country}</div>
    <div className={styles.userAddressLine}>{user.location.postcode}</div>
  </div>
);

export const UserCard = ({ user, index }: UserCardProps) => {
  const [isUserDetailOpen, setIsUserDetailOpen] = useState(false);

  const handleUserDetailClose = () => {
    // maybe add some analytics here
    setIsUserDetailOpen(false);
  };

  const userFullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <div className={styles.userCard}>
        <button
          type="button"
          className={styles.userCardWrapper}
          onClick={() => setIsUserDetailOpen(true)}
        >
          <img
            src={user.thumbnail}
            alt={user.username}
            className={styles.thumbnail}
            width={220}
            height={220}
            loading={index && index > 5 ? 'lazy' : 'eager'}
          />
          <div className={styles.userInfo}>
            <h1 className={styles.fullName}>{userFullName}</h1>
            <div className={styles.userMeta}>
              <span className={classNames(styles.secondary, styles.bold)}>
                @{user.username}
              </span>
              <span className={styles.secondary}>{user.email}</span>
            </div>
          </div>
        </button>
      </div>

      <ModalOverlay isOpen={isUserDetailOpen} onClose={handleUserDetailClose}>
        <div className={styles.userDetailContainer}>
          <img
            src={user.thumbnail}
            alt={user.username}
            className={styles.thumbnail}
            loading="lazy"
          />
          <div className={styles.userMeta}>
            <h1 className={styles.fullName}>{userFullName}</h1>
            <span className={classNames(styles.secondary, styles.bold)}>
              @{user.username}
            </span>
            <span className={styles.secondary}>{user.email}</span>
            <span className={styles.secondary}>{user.phone}</span>
            <UserAddress user={user} />
          </div>
        </div>
      </ModalOverlay>
    </>
  );
};
