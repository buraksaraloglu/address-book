import classNames from 'classnames';

import styles from './styles.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({
  className,
  onChange,
  placeholder = 'Search a user',
  value,
}: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={classNames(styles.searchInput, className)}
    />
  );
};
