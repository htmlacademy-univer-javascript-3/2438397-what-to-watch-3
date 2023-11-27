import { store } from '../store';

export enum ActionType {
  SetGenre = 'films/setGenre',
  setFilms = 'films/setFilmsList',
  setError = 'app/setError',
  setUser = 'user/set',
  setAuthStatus = 'auth/setStatus',
  setDataIsLoading = 'app/setDataIsLoading',
}

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
