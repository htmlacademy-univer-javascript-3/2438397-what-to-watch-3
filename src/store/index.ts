import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { CLIENT } from '../services/services';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: CLIENT,
      },
    }),
});
