import { store } from '../store';

export enum ActionType {
  setError = 'app/setError',
}

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
