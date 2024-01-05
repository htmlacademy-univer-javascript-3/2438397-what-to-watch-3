import { useAppSelector } from '../../hooks';
import { Namespace } from '../namespace';

export function useAllFilmsSelector() {
  return useAppSelector((state) => state[Namespace.AllFilms]);
}
