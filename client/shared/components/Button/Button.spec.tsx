import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('renders button with text and not disabled', () => {
    render(<Button>Button Text</Button>);
    expect(screen.getByText('Button Text')).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(screen.getByRole('button')).not.toHaveClass('disabled');
  });

  it('renders disables the button if disabled provided', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('disabled');
  });

  it('renders with #id when provided', () => {
    const { container } = render(<Button id="btn">Button</Button>);
    expect(container.querySelector('#btn')).toBeInTheDocument();
  });

  it('renders the button as button when type is not provided', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container.querySelector('button')).toHaveAttribute('type', 'button');
  });

  it('renders the button as submit button when type is submit', () => {
    const { container } = render(<Button type="submit">Submit Button</Button>);
    expect(container.querySelector('button')).toHaveAttribute('type', 'submit');
  });

  it('calls the onClick event if provided when clicked', () => {
    const fn = jest.fn();
    render(<Button onClick={() => fn('clicked')}>Click Me</Button>);
    screen.getByRole('button').click();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('clicked');
    screen.getByRole('button').click();
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith('clicked');
  });

  it('adds className to the button if provided', () => {
    render(<Button styleClasses="test-class">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('test-class');
  });
});
