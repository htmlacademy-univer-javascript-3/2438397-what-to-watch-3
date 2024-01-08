import { describe } from 'vitest';
import { user } from './user';
import { logIn, logOut, checkAuth } from '../api-actions';
import { createUser } from '../../mocks/mocks';
import { AuthorizationStatus } from '../../types/authorization-status';

describe('user-store', () => {
  const userItem = createUser();

  const initialState = {
    user: null,
    authorizationStatus: AuthorizationStatus.Unknown,
    favouriteFilms: {
      isLoading: false,
      films: [],
    },
  };

  it('checkAuth.fulfilled: should set authorization status auth', () => {
    expect(
      user.reducer(initialState, {
        type: checkAuth.fulfilled.type,
        payload: userItem,
      }),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
      user: userItem,
      favouriteFilms: {
        films: [],
        isLoading: false,
      },
    });
  });

  it('checkAuth.rejected: should set authorization status No auth', () => {
    expect(
      user.reducer(initialState, {
        type: checkAuth.rejected.type,
      }),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      favouriteFilms: {
        films: [],
        isLoading: false,
      },
    });
  });

  it('login.fulfilled: should set authorization status auth', () => {
    expect(
      user.reducer(initialState, {
        type: logIn.fulfilled.type,
        payload: userItem,
      }),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
      user: userItem,
      favouriteFilms: {
        films: [],
        isLoading: false,
      },
    });
  });

  it('login.rejected: should set authorization status no auth', () => {
    expect(
      user.reducer(initialState, {
        type: logIn.rejected.type,
      }),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      favouriteFilms: {
        films: [],
        isLoading: false,
      },
    });
  });

  it('logout.fulfilled: should set authorization status no auth', () => {
    expect(
      user.reducer(initialState, {
        type: logOut.fulfilled.type,
      }),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      favouriteFilms: {
        films: [],
        isLoading: false,
      },
    });
  });

  it('logout.rejected: should set authorization status no auth', () => {
    expect(
      user.reducer(initialState, {
        type: logOut.rejected.type,
      }),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      favouriteFilms: {
        films: [],
        isLoading: false,
      },
    });
  });
});
