import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Spinner } from './spinner';

describe('Component: Spinner', () => {
  it('should render correctly while loading', () => {
    render(
      <Spinner isLoading>
        <h1>Text</h1>
      </Spinner>,
    );

    expect(screen.getByText('Content is loading...')).toBeInTheDocument();
  });

  it('should render correctly when loaded', () => {
    render(
      <Spinner isLoading={false}>
        <h1>Text</h1>
      </Spinner>,
    );

    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
