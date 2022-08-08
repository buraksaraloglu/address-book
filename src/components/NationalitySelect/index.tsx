import { SearchNationalities } from '@/utils/constants';
import { getSearchNationalityOptions } from '@/utils/helpers';

import styles from './styles.module.scss';

interface NationalitySelectProps {
  value: string;
  onChange: (nationality: SearchNationalities) => void;
}

export const NationalitySelect = ({
  value,
  onChange,
}: NationalitySelectProps) => {
  const options = getSearchNationalityOptions();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as SearchNationalities);
  };

  return (
    <div className={styles.nationalitySelect}>
      <label htmlFor="nationalitySelect">
        Nationality Select
        <select
          id="nationalitySelect"
          name="nationalitySelect"
          value={value}
          onChange={handleChange}
        >
          {options.map(({ value: optionValue, label }) => (
            <option key={optionValue} value={optionValue}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
