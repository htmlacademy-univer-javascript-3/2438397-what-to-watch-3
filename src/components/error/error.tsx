import { ReactElement } from 'react';
import { useErrorSelector } from '../../store/selectors';

export function Error(): ReactElement | null {
  const error = useErrorSelector();

  return error ? <div className="error-info">{error}</div> : null;
}
