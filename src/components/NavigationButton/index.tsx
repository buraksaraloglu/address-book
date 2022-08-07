import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface NavigationButtonProps {
  to: string;
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
  children: React.ReactNode;
}

export const NavigationButton = ({
  to,
  className,
  children,
  clickable = true,
  onClick,
}: NavigationButtonProps) =>
  clickable ? (
    <Link to={to} className={classNames(styles.navigationButton, className)}>
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={classNames(styles.navigationButton, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
