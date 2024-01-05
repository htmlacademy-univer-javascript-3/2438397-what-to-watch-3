import { FilmPromoInfo } from '../../types/film.ts';
import { createSlice } from '@reduxjs/toolkit';
import { FetchPromoFilm } from '../api-actions.ts';
import { Namespace } from '../namespace.ts';

type PromoFilmState = {
  isLoading: boolean;
  data: FilmPromoInfo | null;
};

const initialState: PromoFilmState = {
  isLoading: false,
  data: null,
};

export const promoFilm = createSlice({
  name: Namespace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchPromoFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchPromoFilm.fulfilled, (state, value) => {
        state.isLoading = false;
        state.data = value.payload;
      })
      .addCase(FetchPromoFilm.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
