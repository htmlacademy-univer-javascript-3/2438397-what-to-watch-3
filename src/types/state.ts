import { ShortFilmInfo } from './film';
import { AuthorizationStatus } from './authorizationStatus';
import {User} from './user';

export const ALL_GENRES = 'All genres';


export type State = {
  currentGenre: string;
  films: ShortFilmInfo[];
  filmsIsLoading: boolean;
  error: string | null;
  user: User | null;
  authorizationStatus: AuthorizationStatus;
};
