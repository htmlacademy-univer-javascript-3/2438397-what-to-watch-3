import { describe, expect } from 'vitest';
import { render, act } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';
import { createApiClient } from '../../services/services';
import { AppState } from '../../types/action-type';
import { AppThunkDispatch } from '../../mocks/mocks';
import { Namespace } from '../../store/namespace';
import { ALL_GENRES } from '../../store/all-films/all-films';
import { GenresList } from './genres-list';

describe('genres-list', () => {
  const apiClient = createApiClient();
  const middleware = [thunk.withExtraArgument(apiClient)];
  const mockStoreCreator = configureMockStore<
    AppState,
    Action<string>,
    AppThunkDispatch
  >(middleware);

  const store = mockStoreCreator({
    [Namespace.AllFilms]: {
      isLoading: false,
      films: [],
      currentGenre: ALL_GENRES,
    },
  });

  it('should call action to save correct genre', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <GenresList
            genres={[ALL_GENRES, 'drama', 'not drama', 'comedy']}
            activeGenre={ALL_GENRES}
          />
        </BrowserRouter>
      </Provider>,
    );

    const genre = getByText('drama');
    act(() => {
      genre.click();
    });

    expect(store.getActions()).toEqual([
      {
        type: 'allFilms/SetGenre',
        payload: 'drama',
      },
    ]);
  });
});
