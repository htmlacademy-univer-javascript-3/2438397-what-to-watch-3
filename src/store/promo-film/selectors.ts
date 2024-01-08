import { useAppSelector } from '../../hooks';
import { Namespace } from '../namespace';

export function usePromoFilmSelector() {
  return useAppSelector((state) => state[Namespace.PromoFilm]);
}
