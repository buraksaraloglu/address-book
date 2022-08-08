import { NationalitySelect } from '@/components/NationalitySelect';
import { useSettings } from '@/contexts/settings';

import styles from './styles.module.scss';

export const Settings = () => {
  const { searchNationality, setSearchNationality } = useSettings();

  return (
    <section className={styles.settingsContainer}>
      <h1>Settings</h1>

      <div className={styles.settingsList}>
        <NationalitySelect
          value={searchNationality}
          onChange={nationality => setSearchNationality(nationality)}
        />
      </div>
    </section>
  );
};
