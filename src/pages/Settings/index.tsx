import { NationalitySelect } from '@/components/NationalitySelect';
import { useSettings } from '@/contexts/settings';

export const Settings = () => {
  const { searchNationality, setSearchNationality } = useSettings();

  return (
    <main>
      <h1>Settings</h1>

      <NationalitySelect
        value={searchNationality}
        onChange={nationality => setSearchNationality(nationality)}
      />
    </main>
  );
};
