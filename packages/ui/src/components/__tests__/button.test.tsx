import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/button';

describe('Button', () => {
  it('renders button with default variants', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('h-10'); // default size
  });

  it('renders button with custom variant', () => {
    render(<Button variant='destructive'>Delete</Button>);
    const button = screen.getByRole('button', { name: /delete/i });

    expect(button).toHaveClass('bg-destructive');
  });

  it('renders button with custom size', () => {
    render(<Button size='sm'>Small Button</Button>);
    const button = screen.getByRole('button', { name: /small button/i });

    expect(button).toHaveClass('h-9');
  });

  it('renders as child when asChild prop is true', () => {
    render(
      <Button asChild>
        <a href='/'>Link Button</a>
      </Button>
    );

    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('bg-primary'); // Should inherit button styles
  });

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom Button</Button>);
    const button = screen.getByRole('button', { name: /custom button/i });

    expect(button).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /disabled button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });
});
