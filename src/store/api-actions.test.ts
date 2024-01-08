import { describe, expect } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';

import { createApiClient } from '../services/services';
import { AppState } from '../types/action-type';
import {
  AppThunkDispatch,
  createShortFilmInfo,
  createToken,
  createFilmDescription,
  createPromoFilm,
  createComment,
  extractActionsTypes,
  createAuthData,
} from '../mocks/mocks';
import {
  checkAuth,
  fetchComments,
  fetchFavouriteFilms,
  fetchCurrentFilm,
  fetchAllFilms,
  fetchPromoFilm,
  fetchSimilarFilms,
  logIn,
  logOut,
  postCommentAction,
} from './api-actions';

describe('Test async actions', () => {
  const apiClient = createApiClient();
  const mockMiddleware = [thunk.withExtraArgument(apiClient)];
  const mockAdapter = new MockAdapter(apiClient);
  const mockStoreCreator = configureMockStore<
    AppState,
    Action<string>,
    AppThunkDispatch
  >(mockMiddleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  describe('login', () => {
    it('should dispatch correct "login.pending", "login.fulfilled"', async () => {
      const fakeAuthData = createAuthData();

      mockAdapter.onPost('/login').reply(200, createToken());

      await store.dispatch(logIn(fakeAuthData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([logIn.pending.type, logIn.fulfilled.type]);
    });
  });

  describe('logout', () => {
    it('should dispatch correct "logout.pending", "logout.fulfilled"', async () => {
      mockAdapter.onDelete('/logout').reply(204);

      await store.dispatch(logOut());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([logOut.pending.type, logOut.fulfilled.type]);
    });
  });

  describe('checkAuth', () => {
    it('should dispatch "checkAuth.pending" and "checkAuth.fulfilled" with thunk "checkAuth', async () => {
      mockAdapter.onGet('/login').reply(200);

      await store.dispatch(checkAuth());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([checkAuth.pending.type, checkAuth.fulfilled.type]);
    });

    it('should dispatch "checkAuth.pending" and "checkAuth.rejected" when server response is 400', async () => {
      mockAdapter.onGet('/login').reply(400);

      await store.dispatch(checkAuth());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([checkAuth.pending.type, checkAuth.rejected.type]);
    });
  });

  describe('fetchPromoFilm', () => {
    it('should dispatch correct "fetchPromoFilm.pending", "fetchPromoFilm.fulfilled"', async () => {
      const mockFilm = createPromoFilm();
      mockAdapter.onGet('/promo').reply(200, mockFilm);

      await store.dispatch(fetchPromoFilm());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmPromoFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchPromoFilm.fulfilled
      >;

      expect(fetchFilmPromoFulfilled.payload).toEqual(mockFilm);
      expect(extractedActionsTypes).toEqual([fetchPromoFilm.pending.type, fetchPromoFilm.fulfilled.type]);
    });

    it('should dispatch "fetchPromoFilm.pending", "fetchPromoFilm.rejected" when server response is 400', async () => {
      mockAdapter.onGet('/promo').reply(400);

      await store.dispatch(fetchPromoFilm());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([fetchPromoFilm.pending.type, fetchPromoFilm.rejected.type]);
    });
  });

  describe('fetchFilms', () => {
    it('should dispatch correct "fetchAllFilmsAction.pending", "fetchAllFilmsAction.fulfilled"', async () => {
      const mockFilms = [createShortFilmInfo(), createShortFilmInfo(), createShortFilmInfo()];
      mockAdapter.onGet('/films').reply(200, mockFilms);

      await store.dispatch(fetchAllFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAllFilmsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchAllFilms.fulfilled
      >;

      expect(fetchAllFilmsFulfilled.payload).toEqual(mockFilms);
      expect(extractedActionsTypes).toEqual([fetchAllFilms.pending.type, fetchAllFilms.fulfilled.type]);
    });

    it('should dispatch "fetchAllFilms.pending", "fetchAllFilms.rejected" when server response is 400', async () => {
      mockAdapter.onGet('/films').reply(400);

      await store.dispatch(fetchAllFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([fetchAllFilms.pending.type, fetchAllFilms.rejected.type]);
    });
  });

  describe('fetchFavourite', () => {
    it('should dispatch correct "fetchFavouriteFilms.pending", "fetchFavouriteFilms.fulfilled"', async () => {
      const mockFilms = [
        createShortFilmInfo(),
        createShortFilmInfo(),
        createShortFilmInfo(),
      ];
      mockAdapter.onGet('/favorite').reply(200, mockFilms);

      await store.dispatch(fetchFavouriteFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchFavouriteFilms.fulfilled
      >;

      expect(fetchFavoriteFulfilled.payload).toEqual(mockFilms);
      expect(extractedActionsTypes).toEqual([fetchFavouriteFilms.pending.type, fetchFavouriteFilms.fulfilled.type]);
    });

    it('should dispatch "fetchFavouriteFilms.pending", "fetchFavouriteFilms.rejected" when response 400', async () => {
      mockAdapter.onGet('/favorite').reply(400);

      await store.dispatch(fetchFavouriteFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([fetchFavouriteFilms.pending.type, fetchFavouriteFilms.rejected.type]);
    });
  });

  describe('fetchFilmById', () => {
    it('should dispatch correct "fetchFilm.pending", "fetchFilm.fulfilled"', async () => {
      const mockFilm = createFilmDescription();
      mockAdapter.onGet('/films/abc').reply(200, mockFilm);

      await store.dispatch(fetchCurrentFilm('abc'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchCurrentFilm.fulfilled
      >;

      expect(fetchFilmFulfilled.payload).toEqual(mockFilm);
      expect(extractedActionsTypes).toEqual([fetchCurrentFilm.pending.type, fetchCurrentFilm.fulfilled.type]);
    });

    it('should dispatch "fetchFilm.pending", "fetchFilm.rejected" when server response 400', async () => {
      mockAdapter.onGet('/films/id').reply(400);

      await store.dispatch(fetchCurrentFilm('id'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([fetchCurrentFilm.pending.type, fetchCurrentFilm.rejected.type]);
    });
  });

  describe('fetchSimilarFilms', () => {
    it('should dispatch correct "fetchSimilarFilms.pending", "fetchSimilarFilms.fulfilled"', async () => {
      const mockFilms = [createShortFilmInfo(), createShortFilmInfo(), createShortFilmInfo()];
      mockAdapter.onGet('/films/abc/similar').reply(200, mockFilms);

      await store.dispatch(fetchSimilarFilms('abc'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSimilarFilmsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchSimilarFilms.fulfilled
      >;

      expect(fetchSimilarFilmsFulfilled.payload).toEqual(mockFilms);
      expect(extractedActionsTypes).toEqual([fetchSimilarFilms.pending.type, fetchSimilarFilms.fulfilled.type]);
    });

    it('should dispatch "fetchSimilarFilms.pending", "fetchSimilarFilms.rejected" when response is 400', async () => {
      mockAdapter.onGet('/films/abc/similar').reply(400);

      await store.dispatch(fetchSimilarFilms('abc'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([fetchSimilarFilms.pending.type, fetchSimilarFilms.rejected.type]);
    });
  });

  describe('addCommentAction', () => {
    it('should dispatch correct "postCommentAction.pending", "postCommentAction.fulfilled"', async () => {
      mockAdapter.onPost('/comments/abc').reply(200);

      const result = await store.dispatch(
        postCommentAction({ filmId: 'abc', comment: 'comment text', rating: 5 }),
      );

      const actions = extractActionsTypes(store.getActions());

      expect(result.payload).toEqual(true);
      expect(actions).toEqual([postCommentAction.pending.type, postCommentAction.fulfilled.type]);
    });

    it('should dispatch "postCommentAction.pending", "postCommentAction.rejected" when server response 400', async () => {
      mockAdapter.onPost('/comments/id').reply(400);

      const result = await store.dispatch(
        postCommentAction({ filmId: 'id', comment: 'comment text', rating: 5 }),
      );
      const actions = extractActionsTypes(store.getActions());

      expect(result.payload).toEqual(false);
      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchComments', () => {
    it('should dispatch correct "fetchComments.pending", "fetchComments.fulfilled"', async () => {
      const mockReviews = [createComment(), createComment(), createComment()];
      mockAdapter.onGet('/comments/abc').reply(200, mockReviews);

      await store.dispatch(fetchComments('abc'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmCommentsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchComments.fulfilled
      >;

      expect(fetchFilmCommentsFulfilled.payload).toEqual(mockReviews);
      expect(extractedActionsTypes).toEqual([fetchComments.pending.type, fetchComments.fulfilled.type]);
    });

    it('should dispatch "fetchComments.pending", "fetchComments.rejected" when response 400', async () => {
      mockAdapter.onGet('/comments/id').reply(400);

      await store.dispatch(fetchComments('id'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([fetchComments.pending.type, fetchComments.rejected.type]);
    });
  });
});
