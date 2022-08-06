import { render } from '@testing-library/react';
import { ModalOverlay } from '.';

describe('ModalOverlay', () => {
  it('should render correctly', () => {
    const mockClose = jest.fn();
    const modalContent = 'Modal content';

    const { getByText, getByLabelText } = render(
      <ModalOverlay isOpen onClose={mockClose}>
        {modalContent}
      </ModalOverlay>,
    );

    expect(getByText(modalContent)).toBeInTheDocument();

    const modalOverlay = getByLabelText('modal-overlay');
    modalOverlay.click();
    expect(mockClose).toHaveBeenCalled();
  });
});
