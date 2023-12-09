import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../types/actionType';
import {AxiosInstance} from 'axios';
import {FilmInfo, FilmPromoInfo, ShortFilmInfo} from '../types/film';
import { ApiPath } from '../types/apiPath';
import { User } from '../types/user';
import { AuthorizationStatus } from '../types/authorizationStatus';
import { AuthData } from '../types/authData';
import { RemoveToken, SaveToken } from '../services/tokenActions';
import {
  SetAllFilms,
  SetAllFilmsIsLoading,
  SetAuthStatus, SetComments, SetCommentsIsLoading, SetCurrentFilm, SetCurrentFilmIsLoading,
  SetPromoFilm,
  SetPromoFilmIsLoading, SetSimilarFilms, SetSimilarFilmsIsLoading,
  SetUser,
} from './actions';
import {FilmComment} from '../types/filmComment';

export const FetchAllFilms = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchAllFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(SetAllFilmsIsLoading(true));
  const { data } = await api.get<ShortFilmInfo[]>(ApiPath.Films);
  dispatch(SetAllFilms(data));
  dispatch(SetAllFilmsIsLoading(false));
});

export const FetchPromoFilm = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchPromo', async (_arg, { dispatch, extra: api }) => {
  dispatch(SetPromoFilmIsLoading(true));
  const { data } = await api.get<FilmPromoInfo>(ApiPath.Promo);
  dispatch(SetPromoFilm(data));
  dispatch(SetPromoFilmIsLoading(false));
});

export const FetchCurrentFilm = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchCurrentFilm', async (filmId, { dispatch, extra: api }) => {
  dispatch(SetCurrentFilmIsLoading(true));
  try {
    const { data } = await api.get<FilmInfo>(ApiPath.Film(filmId));
    dispatch(SetCurrentFilm(data));
  } finally {
    dispatch(SetCurrentFilmIsLoading(false));
  }
});

export const FetchSimilarFilms = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchSimilarFilms', async (filmId, { dispatch, extra: api }) => {
  dispatch(SetSimilarFilmsIsLoading(true));
  try {
    const { data } = await api.get<ShortFilmInfo[]>(ApiPath.SimilarFilms(filmId));
    dispatch(SetSimilarFilms(data));
  } finally {
    dispatch(SetSimilarFilmsIsLoading(false));
  }
});

export const FetchComments = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchComments', async (filmId, { dispatch, extra: api }) => {
  dispatch(SetCommentsIsLoading(true));
  try {
    const { data } = await api.get<FilmComment[]>(ApiPath.Comments(filmId));
    dispatch(SetComments(data));
  } finally {
    dispatch(SetCommentsIsLoading(false));
  }
});

export const CheckAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('CheckAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<User>(ApiPath.Login);
    dispatch(SetUser(data));
    dispatch(SetAuthStatus(AuthorizationStatus.Auth));
  } catch {
    dispatch(SetAuthStatus(AuthorizationStatus.NoAuth));
  }
});

export const LogIn = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('logIn', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<User>(ApiPath.Login, {
    email,
    password,
  });
  dispatch(SetUser(data));
  SaveToken(data.token);
  dispatch(SetAuthStatus(AuthorizationStatus.Auth));
});

export const LogOut = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('LogOut', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiPath.Logout);
  dispatch(SetUser(null));
  RemoveToken();
  dispatch(SetAuthStatus(AuthorizationStatus.NoAuth));
});
