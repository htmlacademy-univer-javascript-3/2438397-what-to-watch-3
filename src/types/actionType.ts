import {store} from '../store';


export enum ActionType {
  SetGenre = 'films/setGenre',
  setFilms = 'film/setFilmsList',
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
