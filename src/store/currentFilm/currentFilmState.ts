import { FilmInfo, ShortFilmInfo } from '../../types/film.ts';
import { createSlice } from '@reduxjs/toolkit';
import {
  FetchCurrentFilm,
  FetchSimilarFilms,
  FetchComments,
} from '../apiActions.ts';
import { Namespace } from '../namespace.ts';
import { FilmComment } from '../../types/filmComment';

type CurrentFilmState = {
  isLoading: boolean;
  isNotFound: boolean;
  data: FilmInfo | null;
  similarFilms: {
    isLoading: boolean;
    data: ShortFilmInfo[];
  };
  comments: {
    isLoading: boolean;
    data: FilmComment[];
  };
};

const initialState: CurrentFilmState = {
  isLoading: false,
  isNotFound: false,
  data: null,
  similarFilms: {
    isLoading: false,
    data: [],
  },
  comments: {
    isLoading: false,
    data: [],
  },
};

export const currentFilm = createSlice({
  name: Namespace.CurrentFilm,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchCurrentFilm.pending, (state) => {
        state.isLoading = true;
        state.isNotFound = false;
      })
      .addCase(FetchCurrentFilm.fulfilled, (state, value) => {
        state.isLoading = false;
        state.data = value.payload;
      })
      .addCase(FetchCurrentFilm.rejected, (state) => {
        state.isLoading = false;
        state.isNotFound = true;
      })
      .addCase(FetchSimilarFilms.pending, (state) => {
        state.similarFilms.isLoading = true;
      })
      .addCase(FetchSimilarFilms.fulfilled, (state, value) => {
        state.similarFilms.isLoading = false;
        state.similarFilms.data = value.payload;
      })
      .addCase(FetchSimilarFilms.rejected, (state) => {
        state.similarFilms.isLoading = false;
      })
      .addCase(FetchComments.pending, (state) => {
        state.comments.isLoading = true;
      })
      .addCase(FetchComments.fulfilled, (state, value) => {
        state.comments.isLoading = false;
        state.comments.data = value.payload;
      })
      .addCase(FetchComments.rejected, (state) => {
        state.comments.isLoading = false;
      });
  },
});
