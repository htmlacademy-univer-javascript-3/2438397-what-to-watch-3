import { ReactElement } from 'react';
import { useErrorSelector } from '../../store/error/selectors';

export function Error(): ReactElement | null {
  const error = useErrorSelector();

  return error ? <div className="error-info">{error}</div> : null;
}
