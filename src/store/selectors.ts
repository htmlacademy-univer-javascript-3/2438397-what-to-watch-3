import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../types/authorizationStatus';
import { User } from '../types/user';

export function useAuthorizationStatusSelector(): AuthorizationStatus {
  return useAppSelector((state) => state.authorizationStatus);
}

export function useUserSelector(): User | null {
  return useAppSelector((state) => state.user);
}

export function useAllFilmsSelector() {
  return useAppSelector((state) => state.allFilms);
}

export function useCurrentFilmSelector() {
  return useAppSelector((state) => state.currentFilm);
}

export function usePromoFilmSelector() {
  return useAppSelector((state) => state.promoFilm);
}

export function useSimilarFilmsSelector() {
  return useAppSelector((state) => state.currentFilm.similarFilms);
}

export function useCommentsSelector() {
  return useAppSelector((state) => state.currentFilm.comments);
}
