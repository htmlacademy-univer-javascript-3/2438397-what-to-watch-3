import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Component: Footer', () => {
  it('should render Footer', () => {
    render(<Footer />);

    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
