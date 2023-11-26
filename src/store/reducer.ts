import {createReducer} from '@reduxjs/toolkit';
import {SetFilms, SetGenre, SetError, SetAuthStatus, SetUser, SetDataIsLoading} from './actions.ts';
import {ALL_GENRES, State} from '../types/state';
import {AuthorizationStatus} from '../types/authorizationStatus';

const initialState: State = {
  currentGenre: ALL_GENRES,
  films: [],
  error: null,
  filmsIsLoading: false,
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SetGenre, (state, value) => {
      state.currentGenre = value.payload;
    })
    .addCase(SetFilms, (state, value) => {
      state.films = value.payload;
    })
    .addCase(SetError, (state, value) => {
      state.error = value.payload;
    })
    .addCase(SetDataIsLoading, (state, value) => {
      state.filmsIsLoading = value.payload;
    })
    .addCase(SetUser, (state, value) => {
      state.user = value.payload;
    })
    .addCase(SetAuthStatus, (state, value) => {
      state.authorizationStatus = value.payload;
    });
});
