import { SearchNationalities } from './constants';

export const getSearchNationalityOptions = () => {
  // generate options for the select
  const options = Object.entries(SearchNationalities).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  return options;
};
