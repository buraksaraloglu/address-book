import { User } from '@/models/user';
import { LOCAL_STORAGE_KEYS, SearchNationalities } from './constants';

export const getSearchNationalityOptions = () => {
  // generate options for the select
  const options = Object.entries(SearchNationalities).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  return options;
};

export const formatUsersResponse = (users: any): Array<User> =>
  users.map((user: any) => ({
    id: user.login.uuid,
    firstName: user.name.first,
    lastName: user.name.last,
    email: user.email,
    phone: user.phone,
    location: user.location,
    username: user.login.username,
    thumbnail: user.picture.large,
  }));

export const getSearchNationalityFromLocalStorage = (): SearchNationalities => {
  const searchNationalityFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_KEYS.SEARCH_NATIONALITIES,
  );

  if (!searchNationalityFromLocalStorage) return SearchNationalities.GB;

  const parsedSearchNationality = JSON.parse(searchNationalityFromLocalStorage);

  return parsedSearchNationality in SearchNationalities
    ? parsedSearchNationality
    : SearchNationalities.GB;
};
