import { FilmInfo, ShortFilmInfo } from '../../types/film';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentFilm,
  fetchSimilarFilms,
  fetchComments,
} from '../api-actions';
import { Namespace } from '../namespace';
import { FilmComment } from '../../types/film-comment';

type CurrentFilmState = {
  isLoading: boolean;
  isNotFound: boolean;
  data: FilmInfo | null;
  similarFilms: {
    isLoading: boolean;
    films: ShortFilmInfo[];
  };
  comments: {
    isLoading: boolean;
    comments: FilmComment[];
  };
};

const initialState: CurrentFilmState = {
  isLoading: false,
  isNotFound: false,
  data: null,
  similarFilms: {
    isLoading: false,
    films: [],
  },
  comments: {
    isLoading: false,
    comments: [],
  },
};

export const currentFilm = createSlice({
  name: Namespace.CurrentFilm,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentFilm.pending, (state) => {
        state.isLoading = true;
        state.isNotFound = false;
      })
      .addCase(fetchCurrentFilm.fulfilled, (state, value) => {
        state.isLoading = false;
        state.data = value.payload;
      })
      .addCase(fetchCurrentFilm.rejected, (state) => {
        state.isLoading = false;
        state.isNotFound = true;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.similarFilms.isLoading = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, value) => {
        state.similarFilms.isLoading = false;
        state.similarFilms.films = value.payload;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.similarFilms.isLoading = false;
      })
      .addCase(fetchComments.pending, (state) => {
        state.comments.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, value) => {
        state.comments.isLoading = false;
        state.comments.comments = value.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.comments.isLoading = false;
      });
  },
});
