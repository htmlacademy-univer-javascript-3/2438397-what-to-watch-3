import { createReducer } from '@reduxjs/toolkit';
import {
  SetAllFilmsGenre,
  SetAllFilms,
  SetAllFilmsIsLoading,
  SetPromoFilm,
  SetPromoFilmIsLoading,
  SetSimilarFilms,
  SetSimilarFilmsIsLoading,
  SetCurrentFilm,
  SetCurrentFilmIsLoading,
  SetError,
  SetAuthStatus,
  SetUser,
} from './actions.ts';
import { ALL_GENRES, State } from '../types/state';
import { AuthorizationStatus } from '../types/authorizationStatus';

const initialState: State = {
  allFilms: {
    currentGenre: ALL_GENRES,
    data: [],
    isLoading: false,
  },
  promoFilm: {
    data: null,
    isLoading: false,
  },
  currentFilm: {
    data: null,
    isLoading: false,
  },
  similarFilms: {
    data: [],
    isLoading: false,
  },
  error: null,
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SetAllFilmsGenre, (state, value) => {
      state.allFilms.currentGenre = value.payload;
    })
    .addCase(SetAllFilms, (state, value) => {
      state.allFilms.data = value.payload;
    })
    .addCase(SetAllFilmsIsLoading, (state, value) => {
      state.allFilms.isLoading = value.payload;
    })
    .addCase(SetPromoFilm, (state, value) => {
      state.promoFilm.data = value.payload;
    })
    .addCase(SetPromoFilmIsLoading, (state, value) => {
      state.promoFilm.isLoading = value.payload;
    })
    .addCase(SetCurrentFilm, (state, value) => {
      state.currentFilm.data = value.payload;
    })
    .addCase(SetCurrentFilmIsLoading, (state, value) => {
      state.currentFilm.isLoading = value.payload;
    })
    .addCase(SetSimilarFilms, (state, value) => {
      state.similarFilms.data = value.payload;
    })
    .addCase(SetSimilarFilmsIsLoading, (state, value) => {
      state.similarFilms.isLoading = value.payload;
    })
    .addCase(SetError, (state, value) => {
      state.error = value.payload;
    })
    .addCase(SetUser, (state, value) => {
      state.user = value.payload;
    })
    .addCase(SetAuthStatus, (state, value) => {
      state.authorizationStatus = value.payload;
    });
});
