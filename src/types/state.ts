import {FilmInfo, FilmPromoInfo, ShortFilmInfo} from './film';
import { AuthorizationStatus } from './authorizationStatus';
import { User } from './user';
import {FilmComment} from './filmComment';

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
  promoFilm: {
    isLoading: boolean;
    data: FilmPromoInfo | null;
  };
};
