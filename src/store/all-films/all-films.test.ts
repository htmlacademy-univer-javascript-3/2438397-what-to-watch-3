import { describe, expect } from 'vitest';
import { fetchAllFilms } from '../api-actions';
import { createShortFilmInfo } from '../../mocks/mocks';
import { ALL_GENRES, allFilms, SetGenre } from './all-films';

describe('all-films', () => {
  const filmsList = [
    createShortFilmInfo(),
    createShortFilmInfo({ genre: 'genre' }),
  ];
  const initialState = {
    isLoading: false,
    currentGenre: ALL_GENRES,
    films: [],
  };

  it('should set loading state', () => {
    expect(
      allFilms.reducer(initialState, {
        type: fetchAllFilms.pending.type,
      }),
    ).toEqual({
      isLoading: true,
      currentGenre: ALL_GENRES,
      films: [],
    });
  });

  it('should save film to store', () => {
    expect(
      allFilms.reducer(initialState, {
        type: fetchAllFilms.fulfilled.type,
        payload: filmsList,
      }),
    ).toEqual({
      isLoading: false,
      currentGenre: ALL_GENRES,
      films: filmsList,
    });
  });

  it('should set genre', () => {
    expect(
      allFilms.reducer(initialState, {
        type: SetGenre,
        payload: 'genre',
      }),
    ).toEqual({
      isLoading: false,
      currentGenre: 'genre',
      films: [],
    });
  });
});
