import { ShortFilmInfo } from '../types/film';
import {ALL_GENRES} from '../types/state';

export function extractAllGenres(films: ShortFilmInfo[]): string[] {
  const genres = films.map((film) => film.genre);
  return [ALL_GENRES, ...new Set(genres)];
}
