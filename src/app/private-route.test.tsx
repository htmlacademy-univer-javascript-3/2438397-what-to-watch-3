import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { createApiClient } from '../services/services';
import { AppState } from '../types/action-type';
import { AppThunkDispatch, createUser } from '../mocks/mocks';
import { Namespace } from '../store/namespace';
import { AuthorizationStatus } from '../types/authorization-status';
import { ALL_GENRES } from '../store/all-films/all-films';
import { PrivateRoute } from './private-route';

describe('private-route', () => {
  const apiClient = createApiClient();
  const middleware = [thunk.withExtraArgument(apiClient)];
  const mockStoreCreator = configureMockStore<
    AppState,
    Action<string>,
    AppThunkDispatch
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [Namespace.AllFilms]: {
        isLoading: false,
        data: [],
        currentGenre: ALL_GENRES,
      },
    });
  });

  it('should render content if user is authorized', () => {
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
          <PrivateRoute child={<div>HELLO WORLD!!!</div>} />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText('HELLO WORLD!!!')).toBeInTheDocument();
  });
});
