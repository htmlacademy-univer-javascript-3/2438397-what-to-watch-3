import { describe } from 'vitest';
import { error } from './error';
import { createError } from '../../mocks/mocks';
import { ClearError, SetError } from './actions';

describe('promo-film-store', () => {
  const errorString = createError();

  const initialState = {
    error: null,
  };

  it('should set loading state', () => {
    expect(
      error.reducer(initialState, {
        type: SetError,
        payload: errorString,
      }),
    ).toEqual({
      error: errorString,
    });
  });

  it('clear error should set null to error', () => {
    expect(
      error.reducer(initialState, {
        type: ClearError,
      }),
    ).toEqual({
      error: null,
    });
  });
});
