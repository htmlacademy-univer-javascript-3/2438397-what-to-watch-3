import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  checkAuth,
  fetchFavouriteFilms,
} from '../api-actions';
import { Namespace } from '../namespace';
import { User } from '../../types/user';
import { AuthorizationStatus } from '../../types/authorization-status';
import { ShortFilmInfo } from '../../types/film';

type UserState = {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
  favouriteFilms: {
    isLoading: boolean;
    films: ShortFilmInfo[];
  };
};

const initialState: UserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  favouriteFilms: {
    isLoading: false,
    films: [],
  },
};

export const user = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, value) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = value.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logIn.fulfilled, (state, value) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = value.payload;
      })
      .addCase(logIn.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logOut.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchFavouriteFilms.pending, (state) => {
        state.favouriteFilms.isLoading = true;
      })
      .addCase(fetchFavouriteFilms.fulfilled, (state, value) => {
        state.favouriteFilms.isLoading = false;
        state.favouriteFilms.films = value.payload;
      })
      .addCase(fetchFavouriteFilms.rejected, (state) => {
        state.favouriteFilms.isLoading = false;
      });
  },
});
