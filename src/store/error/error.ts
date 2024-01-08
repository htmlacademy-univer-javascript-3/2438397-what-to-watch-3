import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../namespace';
import { SetError } from './actions';

type ErrorState = {
  error: string | null;
};

const initialState: ErrorState = {
  error: null,
};

export const error = createSlice({
  name: Namespace.Error,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SetError, (state, value) => {
      state.error = value.payload;
    });
  },
});
