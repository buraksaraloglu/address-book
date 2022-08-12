import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import { NavigationButton } from '.';

const customRender = (ui: React.ReactElement) =>
  render(ui, { wrapper: BrowserRouter });

describe('NavigationButton', () => {
  it('should render', () => {
    const to = '/settings';
    const { container, getByText } = customRender(
      <NavigationButton to={to}>Test Button</NavigationButton>,
    );
    expect(container).toBeInTheDocument();

    const link = getByText(/test button/i).closest('a');

    expect(link).toHaveAttribute('href', to);
  });

  it('should render as a button when clickable is false', () => {
    const to = '/settings';
    const onClick = jest.fn();
    const { container, getByText } = customRender(
      <NavigationButton to={to} clickable={false} onClick={onClick}>
        Test Button
      </NavigationButton>,
    );
    expect(container).toBeInTheDocument();

    const button = getByText(/test button/i);

    expect(button.closest('button')).not.toHaveAttribute('href', to);

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
