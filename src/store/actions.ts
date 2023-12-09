import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType, AppDispatch, AppState } from '../types/actionType';
import { FilmInfo, FilmPromoInfo, ShortFilmInfo } from '../types/film';
import { AuthorizationStatus } from '../types/authorizationStatus';
import { User } from '../types/user';
import { AxiosInstance } from 'axios';

//All films info setters
export const SetAllFilmsGenre = createAction<string>(ActionType.SetGenre);

export const SetAllFilms = createAction<ShortFilmInfo[]>(
  ActionType.setAllFilms,
);
export const SetAllFilmsIsLoading = createAction<boolean>(
  ActionType.setAllFilmsIsLoading,
);

//Current film setters
export const SetCurrentFilm = createAction<FilmInfo>(ActionType.setCurrentFilm);

export const SetCurrentFilmIsLoading = createAction<boolean>(
  ActionType.setCurrentFilmIsLoading,
);

//Promo film setters
export const SetPromoFilm = createAction<FilmPromoInfo>(ActionType.setPromoFilm);

export const SetPromoFilmIsLoading = createAction<boolean>(
  ActionType.setPromoFilmIsLoading,
);

//Similar films setters
export const SetSimilarFilms = createAction<ShortFilmInfo[]>(
  ActionType.setSimilarFilms,
);

export const SetSimilarFilmsIsLoading = createAction<boolean>(
  ActionType.setSimilarFilmsIsLoading,
);

//Error setter
export const SetError = createAction<string | null>(ActionType.setError);

export const ClearError = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>(
  'ClearError',
  // eslint-disable-next-line @typescript-eslint/require-await
  async (timeout, { dispatch }) => {
    setTimeout(() => {
      dispatch(SetError(null));
    }, timeout);
  },
);

//User setters
export const SetUser = createAction<User | null>(ActionType.setUser);
export const SetAuthStatus = createAction<AuthorizationStatus>(
  ActionType.setAuthStatus,
);
