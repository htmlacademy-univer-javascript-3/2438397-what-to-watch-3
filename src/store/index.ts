import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer.ts';
import { CreateApiClient } from '../services/api';

const client = CreateApiClient();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: client,
      },
    }),
});
