export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export interface UserMeta {
  id: string;
  location: Location;
  phone: string;
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
  phone: string;
  nat: string;
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
    country: 'United States',
    postcode: '10001',
  },
  nat: 'US',
  phone: '123-456-7890',
};
