import { describe } from 'vitest';
import { saveToken, getToken, removeToken } from './token-services';

describe('token', () => {
  const mockToken = 'mock-token';
  const localStorageKey = 'six-films-token';

  it('saveToken saves token', () => {
    saveToken(mockToken);
    expect(localStorage.getItem(localStorageKey)).toEqual(mockToken);
  });

  it('getToken returns token', () => {
    localStorage.setItem(localStorageKey, mockToken);
    expect(getToken()).toEqual(mockToken);
  });

  it('dropToken removes token', () => {
    localStorage.setItem(localStorageKey, mockToken);
    removeToken();
    expect(localStorage.getItem(localStorageKey)).toEqual(null);
  });
});
