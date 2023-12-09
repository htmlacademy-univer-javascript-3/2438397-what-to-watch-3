import { useAppSelector } from '../../hooks';
import { Namespace } from '../namespace.ts';

export function useErrorSelector() {
  return useAppSelector((state) => state[Namespace.Error].error);
}
