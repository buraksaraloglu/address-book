import { createContext, useState, useContext, useMemo, useEffect } from 'react';

import { fetchUsers } from '@/api/users';
import { USERS_LIMIT } from '@/utils/constants';
import { useSettings } from './settings';

import type { User } from '../models/user';
import { useSearch } from './search';

interface IUsersContext {
  users: User[];
  isLoading: boolean;
  error: Error | null;
}

const defaultSettings: IUsersContext = {
  users: [],
  isLoading: false,
  error: null,
};

export const UsersContext = createContext(defaultSettings);

const formatUsersResponse = (users: any): User[] =>
  users.map((user: any) => ({
    id: user.login.uuid,
    firstName: user.name.first,
    lastName: user.name.last,
    email: user.email,
    phone: user.phone,
    location: user.location,
    username: user.login.username,
    thumbnail: user.picture.medium,
  }));

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

  const value = useMemo(
    () => ({
      users: debouncedSearch
        ? users.filter(
            user =>
              user.firstName
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase()) ||
              user.lastName
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase()),
          )
        : users,
      isLoading,
      error,
    }),
    [users, isLoading, error, debouncedSearch],
  );

  const fetchUsersRequest = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const { info, results } = await fetchUsers({
        nationality: searchNationality,
        pagination,
      });
      setUsers(formatUsersResponse(results));
      setPagination(info);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersRequest();
  }, []);

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
