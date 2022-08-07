import { SearchInput } from '@/components/SearchInput';
import { useSearch } from '@/contexts/search';

export const SearchContainer = () => {
  const { search, setSearch } = useSearch();

  return (
    <SearchInput
      onChange={setSearch}
      placeholder="Search a user"
      value={search}
    />
  );
};
