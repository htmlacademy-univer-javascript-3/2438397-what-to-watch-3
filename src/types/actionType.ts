import { store } from '../store';

export enum ActionType {
  SetGenre = 'films/setGenre',
  setAllFilms = 'films/setFilmsList',
  setAllFilmsIsLoading = 'films/setIsLoading',
  setCurrentFilm = 'currentFilm/set',
  setCurrentFilmIsLoading = 'currentFilm/setIsLoading',
  setPromoFilm = 'promoFilm/set',
  setPromoFilmIsLoading = 'promoFilm/setIsLoading',
  setSimilarFilms = 'similarFilms/set',
  setSimilarFilmsIsLoading = 'similarFilms/setIsLoading',
  setError = 'app/setError',
  setUser = 'user/set',
  setAuthStatus = 'auth/setStatus',
  setDataIsLoading = 'app/setDataIsLoading',
}

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
