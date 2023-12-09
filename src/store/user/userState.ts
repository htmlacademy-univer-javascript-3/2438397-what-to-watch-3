import { createSlice } from '@reduxjs/toolkit';
import { LogIn, LogOut, CheckAuth } from '../apiActions.ts';
import { Namespace } from '../namespace.ts';
import { User } from '../../types/user';
import { AuthorizationStatus } from '../../types/authorizationStatus';

type UserState = {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
};

const initialState: UserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
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
      });
  },
});
