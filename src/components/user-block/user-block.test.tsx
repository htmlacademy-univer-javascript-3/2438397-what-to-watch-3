import { describe, expect } from 'vitest';
import { act, render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';
import { createApiClient } from '../../services/services';
import { AppState } from '../../types/action-type';
import { AppThunkDispatch, createUser } from '../../mocks/mocks.ts';
import { Namespace } from '../../store/namespace.ts';
import { UserBlock } from './user-block';
import { AuthorizationStatus } from '../../types/authorization-status';
import { logOut } from '../../store/api-actions.ts';

describe('header', () => {
  const apiClient = createApiClient();
  const middleware = [thunk.withExtraArgument(apiClient)];
  const mockStoreCreator = configureMockStore<
    AppState,
    Action<string>,
    AppThunkDispatch
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  it('should log in on unauthorized', () => {
    store = mockStoreCreator({
      [Namespace.User]: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
        favouriteFilms: {
          isLoading: false,
          films: [],
        },
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <UserBlock />
        </BrowserRouter>
      </Provider>,
    );
    const signOutButton = getByText('Sign in');
    act(() => {
      signOutButton.click();
    });
    expect(getByText('Sign in')).not.toBeUndefined();
  });

  it('should call action logout', () => {
    store = mockStoreCreator({
      [Namespace.User]: {
        user: createUser(),
        authorizationStatus: AuthorizationStatus.Auth,
        favouriteFilms: {
          isLoading: false,
          films: [],
        },
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <UserBlock />
        </BrowserRouter>
      </Provider>,
    );
    const signOutButton = getByText('Sign out');
    act(() => {
      signOutButton.click();
    });
    expect(store.getActions()[0].type).toEqual(logOut.pending.type);
  });
});
