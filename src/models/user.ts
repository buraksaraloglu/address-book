export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
}

export interface UserMeta {
  id: string;
  location: Location;
  phone: string;
  cell: string;
}

export interface UserDetail extends UserMeta {
  location: Location;
}

export interface User extends UserDetail {
  id: string;
  thumbnail: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export const mockUser: User = {
  id: '1',
  thumbnail: 'https://randomuser.me/api/portraits/men/22.jpg',
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  location: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    postcode: '10001',
  },
  phone: '123-456-7890',
  cell: '123-456-7890',
};
