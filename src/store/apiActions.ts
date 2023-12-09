import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../types/actionType';
import {AxiosInstance} from 'axios';
import {FilmInfo, FilmPromoInfo, ShortFilmInfo} from '../types/film';
import { ApiPath } from '../types/apiPath';
import { User } from '../types/user';
import { AuthData } from '../types/authData';
import { RemoveToken, SaveToken } from '../services/tokenActions';
import {FilmComment} from '../types/filmComment';

export const FetchAllFilms = createAsyncThunk<
  ShortFilmInfo[],
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchAllFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<ShortFilmInfo[]>(ApiPath.Films);
  return data;
});

export const FetchPromoFilm = createAsyncThunk<
  FilmPromoInfo,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchPromo', async (_arg, { extra: api }) => {
  const { data } = await api.get<FilmPromoInfo>(ApiPath.Promo);
  return data;
});

export const FetchFavouriteFilms = createAsyncThunk<
  ShortFilmInfo[],
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchFavourite', async (_arg, { extra: api }) => {
  const { data } = await api.get<ShortFilmInfo[]>(ApiPath.FavouriteItems);
  return data;
});

export const PostFavouriteFilm = createAsyncThunk<
  boolean,
  { filmId: string; status: number },
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('PposFavourite', async ({ filmId, status }, { extra: api }) => {
  try {
    await api.post(ApiPath.SetFavourite(filmId, status));
    return true;
  } catch {
    return false;
  }
});

export const FetchCurrentFilm = createAsyncThunk<
  FilmInfo,
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchCurrentFilm', async (filmId, { extra: api }) => {
  const { data } = await api.get<FilmInfo>(ApiPath.Film(filmId));
  return data;
});

export const FetchSimilarFilms = createAsyncThunk<
  ShortFilmInfo[],
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchSimilarFilms', async (filmId, { extra: api }) => {
  const { data } = await api.get<ShortFilmInfo[]>(ApiPath.SimilarFilms(filmId));
  return data;
});

export const FetchComments = createAsyncThunk<
  FilmComment[],
  string,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('FetchComments', async (filmId, { extra: api }) => {
  const { data } = await api.get<FilmComment[]>(ApiPath.Comments(filmId));
  return data;
});

export const postCommentAction = createAsyncThunk<
  boolean,
  {
    filmId: string;
    comment: string;
    rating: number;
  },
  {
    state: AppState;
    extra: AxiosInstance;
  }
>('PostComment', async ({ filmId, comment, rating }, { extra: api }) => {
  try {
    await api.post<FilmComment>(ApiPath.Comments(filmId), {comment: comment, rating: rating});
    return true;
  } catch {
    return false;
  }
});

export const CheckAuth = createAsyncThunk<
  User,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('CheckAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<User>(ApiPath.Login);
  return data;
});

export const LogIn = createAsyncThunk<
  User,
  AuthData,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('logIn', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<User>(ApiPath.Login, {
    email,
    password,
  });
  SaveToken(data.token);
  return data;
});

export const LogOut = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>('LogOut', async (_arg, { extra: api }) => {
  await api.delete(ApiPath.Logout);
  RemoveToken();
});
