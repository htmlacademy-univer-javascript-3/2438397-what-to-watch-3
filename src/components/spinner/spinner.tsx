import { ReactElement } from 'react';

export type SpinnerProps = {
  isLoading: boolean;
  children: ReactElement;
}

export function Spinner({isLoading, children}: SpinnerProps): ReactElement {
  return isLoading ? (
    <h2>Content is loading...</h2>
  ) : children;
}
