import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './reducer.ts';
import { CreateApiClient } from '../services/api';

const client = CreateApiClient;

export const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: client,
      },
    }),
});
