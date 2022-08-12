import { render, fireEvent } from '@testing-library/react';
import { SearchInput } from '.';

// test search input component functionality
describe('SearchInput', () => {
  it('should render', () => {
    const onChange = jest.fn();
    const { getByRole, container } = render(
      <SearchInput value="" onChange={onChange} />,
    );
    expect(container).toBeInTheDocument();

    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should call onChange when input is changed', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<SearchInput value="" onChange={onChange} />);

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledWith('test');
  });

  it('should call onChange when input is cleared', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <SearchInput value="test" onChange={onChange} />,
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    expect(onChange).toHaveBeenCalledWith('');
  });
});
