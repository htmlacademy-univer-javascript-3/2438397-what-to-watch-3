import { useAppSelector } from '../../hooks';
import { Namespace } from '../namespace';

export function useCurrentFilmSelector() {
  return useAppSelector((state) => state[Namespace.CurrentFilm]);
}

export function useSimilarFilmsSelector() {
  return useAppSelector((state) => state[Namespace.CurrentFilm].similarFilms);
}

export function useCommentsSelector() {
  return useAppSelector((state) => state[Namespace.CurrentFilm].comments);
}
