import { type SearchNationalities, USERS_LIMIT } from '@/utils/constants';

const MOCK_USER_SERVICE = 'https://randomuser.me/api/';

interface FetchUsers {
  nationality?: SearchNationalities;
  pagination: {
    page?: number;
    limit?: number;
    seed?: string;
  };
}

const includedFields = [
  'name',
  'location',
  'email',
  'phone',
  'login',
  'picture',
  'nat',
];

export const fetchUsers = async ({
  nationality,
  pagination: { page = 1, limit = USERS_LIMIT, seed = '' },
}: FetchUsers) => {
  const url = new URL(MOCK_USER_SERVICE);
  url.searchParams.append('results', limit.toString());
  url.searchParams.append('offset', ((page - 1) * limit).toString());
  url.searchParams.append('inc', includedFields.join(','));

  if (seed) url.searchParams.append('seed', seed);
  if (nationality) url.searchParams.append('nat', nationality);

  const response = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
