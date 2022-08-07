import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface NavigationButtonProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const NavigationButton = ({
  to,
  className,
  children,
}: NavigationButtonProps) => (
  <Link to={to} className={classNames(styles.navigationButton, className)}>
    {children}
  </Link>
);
