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
    const { getByRole, getByLabelText } = render(<UserCard user={mockUser} />);

    const userCard = getByRole('button');
    fireEvent.click(userCard);

    const modalOverlay = getByLabelText(/modal-overlay/i);
    expect(modalOverlay).toBeInTheDocument();
  });

  it('should render user details on modal', async () => {
    const { getByLabelText, getByRole, getAllByText } = render(
      <UserCard user={mockUser} />,
    );

    const userCard = getByRole('button');
    fireEvent.click(userCard);

    const modalOverlay = getByLabelText('modal-overlay', {
      selector: 'div',
    });

    expect(modalOverlay).toBeInTheDocument();
    expect(
      getAllByText(`${mockUser.firstName} ${mockUser.lastName}`),
    ).toHaveLength(2); // 2 because of the user card and the user detail

    expect(getAllByText(mockUser.email)).toHaveLength(2);
    expect(getAllByText(`@${mockUser.username}`)).toHaveLength(2);
  });

  it('should close the modal on outside click click', async () => {
    const { getByRole, getByLabelText } = render(<UserCard user={mockUser} />);

    const userCard = getByRole('button');
    fireEvent.click(userCard);

    const modalOverlay = getByLabelText(/modal-overlay/i);
    expect(modalOverlay).toBeInTheDocument();

    fireEvent.click(modalOverlay);
    expect(modalOverlay).not.toBeInTheDocument();
  });
});
