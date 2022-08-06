import { screen, render, waitFor, fireEvent } from '@testing-library/react';

import { mockUser } from '@/models/user';
import { UserCard } from '.';

describe('UserCard', () => {
  it('should render correctly', () => {
    const { queryByRole, getByText } = render(<UserCard user={mockUser} />);

    expect(
      queryByRole('img', {
        name: mockUser.username,
      }),
    ).toBeInTheDocument();

    const fullName = `${mockUser.firstName} ${mockUser.lastName}`;

    expect(getByText(fullName)).toBeInTheDocument();
    expect(getByText(mockUser.email)).toBeInTheDocument();
    expect(getByText(`@${mockUser.username}`)).toBeInTheDocument();
  });

  it('should open a modal on user card button click', async () => {
    const { getByRole } = render(<UserCard user={mockUser} />);

    const userCard = getByRole('button');
    fireEvent.click(userCard);

    // await waitFor(() => {
    //   expect(screen.getBy).toHaveBeenCalled();
    // });
  });
});
