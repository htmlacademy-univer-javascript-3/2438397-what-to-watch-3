import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import { BrowserRouter } from 'react-router-dom';
import { createApiClient } from '../../services/services';
import { AppState } from '../../types/action-type';
import {
  AppThunkDispatch,
  createShortFilmInfo,
  createUser,
} from '../../mocks/mocks';
import { Namespace } from '../../store/namespace';
import { AuthorizationStatus } from '../../types/authorization-status';
import { MyListButton } from './my-list-button';

describe('my-list-button', () => {
  const apiClient = createApiClient();
  const middleware = [thunk.withExtraArgument(apiClient)];
  const mockAxiosAdapter = new MockAdapter(apiClient);
  const mockStoreCreator = configureMockStore<
    AppState,
    Action<string>,
    AppThunkDispatch
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  const film = createShortFilmInfo();

  beforeEach(() => {
    store = mockStoreCreator({
      [Namespace.User]: {
        user: createUser(),
        authorizationStatus: AuthorizationStatus.Auth,
        favouriteFilms: {
          isLoading: false,
          films: [film],
        },
      },
    });
  });

  it('should render correctly with favourite film', () => {
    mockAxiosAdapter.onGet('/favorite').reply(200, [film]);

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyListButton filmId={film.id} />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByTestId('svg-is-added')).toHaveAttribute(
      'xlink:href',
      '#in-list',
    );
  });

  it('should render correctly with not favourite film', () => {
    mockAxiosAdapter.onGet('/favorite').reply(200, []);

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyListButton filmId={`${film.id}_wrong_suffix`} />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByTestId('svg-is-added')).toHaveAttribute('xlink:href', '#add');
  });
});
