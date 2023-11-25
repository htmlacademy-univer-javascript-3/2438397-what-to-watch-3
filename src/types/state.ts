import { ShortFilmInfo } from './film';

export const ALL_GENRES = 'All genres';


export type State = {
  currentGenre: string;
  films: ShortFilmInfo[];
};
