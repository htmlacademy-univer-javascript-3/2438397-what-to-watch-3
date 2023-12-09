import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from './namespace';
import {currentFilm} from './currentFilm/currentFilmState';
import {allFilms} from './allFilms/allFilmsState';
import {error} from './error/errorState';
import {promoFilm} from './filmPromo/promoFilmState';
import {user} from './user/userState';

export const rootReducer = combineReducers({
  [Namespace.AllFilms]: allFilms.reducer,
  [Namespace.CurrentFilm]: currentFilm.reducer,
  [Namespace.Error]: error.reducer,
  [Namespace.PromoFilm]: promoFilm.reducer,
  [Namespace.User]: user.reducer
});
