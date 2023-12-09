import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType, AppDispatch, AppState } from '../../types/actionType';
import { AxiosInstance } from 'axios';

//Error setter
export const SetError = createAction<string | null>(ActionType.setError);

export const ClearError = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
>(
  'ClearError',
  // eslint-disable-next-line @typescript-eslint/require-await
  async (timeout, { dispatch }) => {
    setTimeout(() => {
      dispatch(SetError(null));
    }, timeout);
  },
);
