import { createSlice } from '@reduxjs/toolkit';
import {
  LogIn,
  LogOut,
  CheckAuth,
  FetchFavouriteFilms,
} from '../api-actions.ts';
import { Namespace } from '../namespace.ts';
import { User } from '../../types/user';
import { AuthorizationStatus } from '../../types/authorization-status';
import { ShortFilmInfo } from '../../types/film';

type User = {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
  favouriteFilms: {
    isLoading: boolean;
    data: ShortFilmInfo[];
  };
};

const initialState: User = {
  user: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
  favouriteFilms: {
    isLoading: false,
    data: [],
  },
};

export const user = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CheckAuth.fulfilled, (state, value) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = value.payload;
      })
      .addCase(CheckAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(LogIn.fulfilled, (state, value) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = value.payload;
      })
      .addCase(LogIn.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(LogOut.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(LogOut.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(FetchFavouriteFilms.pending, (state) => {
        state.favouriteFilms.isLoading = true;
      })
      .addCase(FetchFavouriteFilms.fulfilled, (state, value) => {
        state.favouriteFilms.isLoading = false;
        state.favouriteFilms.data = value.payload;
      })
      .addCase(FetchFavouriteFilms.rejected, (state) => {
        state.favouriteFilms.isLoading = false;
      });
  },
});
