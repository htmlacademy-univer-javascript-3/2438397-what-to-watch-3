import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {AppDispatch, AppState} from '../types/actionType';
import {ActionType} from '../types/actionType';
import {ShortFilmInfo} from '../types/film';
import {AuthorizationStatus} from '../types/authorizationStatus';
import {User} from '../types/user';
import {RemoveToken, SaveToken} from '../services/tokenActions';
import {ApiPath} from '../types/apiPath';
import {AuthData} from '../types/authData';

export const SetGenre = createAction<string>(ActionType.SetGenre);

export const SetFilms = createAction<ShortFilmInfo[]>(ActionType.setFilms);

export const SetError = createAction<string | null>(ActionType.setError);

export const SetUser = createAction<User | null>(ActionType.setUser);
export const SetAuthStatus = createAction<AuthorizationStatus>(ActionType.setAuthStatus);

export const SetDataIsLoading = createAction<boolean>(ActionType.setDataIsLoading);

export const FetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'FetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(SetDataIsLoading(true));
    const { data } = await api.get<ShortFilmInfo[]>(ApiPath.Films);
    dispatch(SetFilms(data));
    dispatch(SetDataIsLoading(false));
  }
);

export const CheckAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'CheckAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiPath.Login);
      dispatch(SetAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(SetAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);

const TIMEOUT_SHOW_ERROR = 2000;

export const ClearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'ClearError',
  async (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(SetError(null));
    }, TIMEOUT_SHOW_ERROR);
  }
);

export const LogIn = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'logIn',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(ApiPath.Login, {
      email,
      password,
    });
    dispatch(SetUser(data));
    SaveToken(data.token);
    dispatch(SetAuthStatus(AuthorizationStatus.Auth));
  }
);

export const LogOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'LogOut',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiPath.Logout);
    dispatch(SetUser(null));
    RemoveToken();
    dispatch(SetAuthStatus(AuthorizationStatus.NoAuth));
  }
);
