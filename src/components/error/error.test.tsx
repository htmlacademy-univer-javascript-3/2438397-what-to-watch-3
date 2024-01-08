import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';
import { createApiClient } from '../../services/services';
import { AppState } from '../../types/action-type';
import { AppThunkDispatch } from '../../mocks/mocks';
import { Namespace } from '../../store/namespace';
import {Error} from './error.js';

describe('genres-list', () => {
  const apiClient = createApiClient();
  const middleware = [thunk.withExtraArgument(apiClient)];
  const mockStoreCreator = configureMockStore<
    AppState,
    Action<string>,
    AppThunkDispatch
  >(middleware);

  it('should render error from store', () => {
    const store = mockStoreCreator({
      [Namespace.Error]: {
        error: 'Very long error text'
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText('Very long error text')).not.toBeUndefined();
  });

  it('Should not render error when null', () => {
    const store = mockStoreCreator({
      [Namespace.Error]: {
        error: null
      },
    });
    const { queryByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </Provider>,
    );

    expect(queryByText('Very long error text')).toBeNull();
  });
});
