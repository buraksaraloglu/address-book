import {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

import { fetchUsers } from '@/api/users';
import { USERS_LIMIT } from '@/utils/constants';
import { formatUsersResponse } from '@/utils/helpers';
import { useSettings } from './settings';

import type { User } from '../models/user';
import { useSearch } from './search';

interface IUsersContext {
  users: User[];
  isLoading: boolean;
  error: string | null;
  fetchNextPage: (paginateProps?: Partial<IUsersContext['pagination']>) => void;
  pagination: {
    page: number;
    limit: number;
    seed: string;
  };
}

const defaultSettings: IUsersContext = {
  users: [],
  isLoading: false,
  error: null,
  fetchNextPage: () => null,
  pagination: {
    page: 1,
    limit: 0,
    seed: '',
  },
};

export const UsersContext = createContext(defaultSettings);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: USERS_LIMIT,
    seed: '',
  });

  const { searchNationality } = useSettings();
  const { debouncedSearch } = useSearch();

  const fetchUsersRequest = useCallback(
    async (props?: Partial<IUsersContext['pagination']>) => {
      if (props?.seed === pagination.seed) {
        return;
      }
      const { page, seed } = props || pagination;

      setIsLoading(true);
      setError(null);
      try {
        const { info, results } = await fetchUsers({
          nationality: searchNationality,
          pagination: {
            page,
            seed,
            limit: pagination.limit,
          },
        });

        const formattedUsers = formatUsersResponse(results);
        setUsers(prevUsers =>
          prevUsers[0]?.nat === searchNationality
            ? [...prevUsers, ...formattedUsers]
            : formattedUsers,
        );
        setPagination(prevPagination => ({
          ...prevPagination,
          seed: info.seed,
          page: info.page,
        }));
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [searchNationality, pagination],
  );

  const fetchNextPage = useCallback(
    (paginateProps?: Partial<IUsersContext['pagination']>) => {
      fetchUsersRequest(paginateProps);
    },
    [users],
  );

  useEffect(() => {
    fetchUsersRequest();
  }, [searchNationality]);

  const value = useMemo(
    () => ({
      users: debouncedSearch
        ? users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`;
            return fullName
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase());
          })
        : users,
      isLoading,
      error,
      fetchNextPage,
      pagination,
    }),
    [users, isLoading, error, setPagination, debouncedSearch],
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
};
