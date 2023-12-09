import {FilmInfo, FilmPromoInfo, ShortFilmInfo} from './film';
import { AuthorizationStatus } from './authorizationStatus';
import { User } from './user';

export const ALL_GENRES = 'All genres';

export type State = {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  allFilms: {
    currentGenre: string;
    data: ShortFilmInfo[];
    isLoading: boolean;
  };
  currentFilm: {
    isLoading: boolean;
    data: FilmInfo | null;
  };
  promoFilm: {
    isLoading: boolean;
    data: FilmPromoInfo | null;
  };
  similarFilms: {
    isLoading: boolean;
    data: ShortFilmInfo[];
  };
};
