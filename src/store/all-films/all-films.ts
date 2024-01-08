import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ShortFilmInfo } from '../../types/film';
import { Namespace } from '../namespace';
import { fetchAllFilms } from '../api-actions';

export const ALL_GENRES = 'All genres';

type FilmsState = {
  isLoading: boolean;
  data: ShortFilmInfo[];
  currentGenre: string;
};

const initialState: FilmsState = {
  isLoading: false,
  data: [],
  currentGenre: ALL_GENRES,
};

export const allFilms = createSlice({
  name: Namespace.AllFilms,
  initialState,
  reducers: {
    SetGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilms.fulfilled, (state, value) => {
        state.isLoading = false;
        state.data = value.payload;
      })
      .addCase(fetchAllFilms.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { SetGenre } = allFilms.actions;
