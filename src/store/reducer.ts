import { createReducer } from '@reduxjs/toolkit';
import { SetGenre, SetFilms } from './actions.ts';
import {State} from '../types/state';
import {ALL_GENRES} from '../types/state';
import {CATALOG_FILMS} from '../mocks/films';

const initialState: State = {
  currentGenre: ALL_GENRES,
  films: CATALOG_FILMS,
};

export const Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SetGenre, (state, value) => {
      state.currentGenre = value.payload;
    })
    .addCase(SetFilms, (state, value) => {
      state.films = value.payload;
    });
});
