import { FilmPromoInfo } from '../../types/film';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPromoFilm } from '../api-actions';
import { Namespace } from '../namespace';

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
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, value) => {
        state.isLoading = false;
        state.data = value.payload;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
