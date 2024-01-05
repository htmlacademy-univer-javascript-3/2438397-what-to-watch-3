import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from './namespace';
import { currentFilm } from './current-film/current-film';
import { allFilms } from './all-films/all-films';
import { error } from './error/error';
import { promoFilm } from './promo-film/promo-film';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [Namespace.AllFilms]: allFilms.reducer,
  [Namespace.CurrentFilm]: currentFilm.reducer,
  [Namespace.Error]: error.reducer,
  [Namespace.PromoFilm]: promoFilm.reducer,
  [Namespace.User]: user.reducer,
});
