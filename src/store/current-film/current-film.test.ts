import { describe, expect } from 'vitest';
import { currentFilm } from './current-film';
import {
  fetchComments,
  fetchCurrentFilm,
  fetchSimilarFilms,
} from '../api-actions';
import {
  createComment,
  createFilmDescription,
  createShortFilmInfo,
} from '../../mocks/mocks';

describe('current-film', () => {
  const filmItem = createFilmDescription();
  const filmsList = [
    createShortFilmInfo(),
    createShortFilmInfo({ genre: 'genre' }),
  ];
  const commentsList = [createComment(), createComment(), createComment()];

  const initialState = {
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

  it('should set loading data', () => {
    expect(
      currentFilm.reducer(initialState, {
        type: fetchCurrentFilm.pending.type,
      }),
    ).toEqual({
      isLoading: true,
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
    });
  });

  it('should save film to store', () => {
    expect(
      currentFilm.reducer(initialState, {
        type: fetchCurrentFilm.fulfilled.type,
        payload: filmItem,
      }),
    ).toEqual({
      isLoading: false,
      isNotFound: false,
      data: filmItem,
      similarFilms: {
        isLoading: false,
        films: [],
      },
      comments: {
        isLoading: false,
        comments: [],
      },
    });
  });

  it('should set loading similar films', () => {
    expect(
      currentFilm.reducer(initialState, {
        type: fetchSimilarFilms.pending.type,
      }),
    ).toEqual({
      isLoading: false,
      isNotFound: false,
      data: null,
      similarFilms: {
        isLoading: true,
        films: [],
      },
      comments: {
        isLoading: false,
        comments: [],
      },
    });
  });

  it('should set similar films data', () => {
    expect(
      currentFilm.reducer(initialState, {
        type: fetchSimilarFilms.fulfilled.type,
        payload: filmsList,
      }),
    ).toEqual({
      isLoading: false,
      isNotFound: false,
      data: null,
      similarFilms: {
        isLoading: false,
        films: filmsList,
      },
      comments: {
        isLoading: false,
        comments: [],
      },
    });
  });

  it('should set loading comments', () => {
    expect(
      currentFilm.reducer(initialState, {
        type: fetchComments.pending.type,
      }),
    ).toEqual({
      isLoading: false,
      isNotFound: false,
      data: null,
      similarFilms: {
        isLoading: false,
        films: [],
      },
      comments: {
        isLoading: true,
        comments: [],
      },
    });
  });

  it('should set comments', () => {
    expect(
      currentFilm.reducer(initialState, {
        type: fetchComments.fulfilled.type,
        payload: commentsList,
      }),
    ).toEqual({
      isLoading: false,
      isNotFound: false,
      data: null,
      similarFilms: {
        isLoading: false,
        films: [],
      },
      comments: {
        isLoading: false,
        comments: commentsList,
      },
    });
  });
});
