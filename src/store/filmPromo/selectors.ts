import { useAppSelector } from '../../hooks';
import { Namespace } from '../namespace.ts';

export function usePromoFilmSelector() {
  return useAppSelector((state) => state[Namespace.PromoFilm]);
}
