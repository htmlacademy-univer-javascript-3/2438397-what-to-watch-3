import { ShortFilmInfo } from '../types/film';
import {ALL_GENRES} from '../store/allFilms/allFilmsState';

export function filterFilms(
  films: ShortFilmInfo[],
  genre: string,
): ShortFilmInfo[] {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}
