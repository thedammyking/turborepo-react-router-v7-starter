import { render, screen } from '@testing-library/react';

import { Welcome } from '../pages/welcome';

describe('Welcome', () => {
  it('renders the component with the provided message', () => {
    render(<Welcome message='Test message' />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders all resource links', () => {
    render(<Welcome message='Test' />);

    // Check for resource links
    expect(screen.getByRole('link', { name: /react router docs/i })).toHaveAttribute(
      'href',
      'https://reactrouter.com/docs'
    );
    expect(screen.getByRole('link', { name: /join discord/i })).toHaveAttribute(
      'href',
      'https://rmx.as/discord'
    );
  });

  it('renders the UI button', () => {
    render(<Welcome message='Test' />);
    expect(screen.getByRole('button', { name: /button from @repo\/ui/i })).toBeInTheDocument();
  });
});
