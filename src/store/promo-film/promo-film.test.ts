import { describe } from 'vitest';
import { promoFilm } from './promo-film';
import { fetchPromoFilm } from '../api-actions';
import { createPromoFilm } from '../../mocks/mocks';

describe('promo-film-store', () => {
  const promoFilmItem = createPromoFilm();

  const initialState = {
    isLoading: false,
    data: null,
  };

  it('should set loading state', () => {
    expect(
      promoFilm.reducer(initialState, {
        type: fetchPromoFilm.pending.type,
      }),
    ).toEqual({
      isLoading: true,
      data: null,
    });
  });

  it('should save promo film to store', () => {
    expect(
      promoFilm.reducer(initialState, {
        type: fetchPromoFilm.fulfilled.type,
        payload: promoFilmItem,
      }),
    ).toEqual({
      isLoading: false,
      data: promoFilmItem,
    });
  });
});
