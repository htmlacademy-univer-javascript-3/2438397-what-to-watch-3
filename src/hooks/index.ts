import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../types/action-type';
import { useCallback, useEffect } from 'react';
import {
  fetchAllFilms,
  fetchComments,
  fetchCurrentFilm,
  fetchFavouriteFilms,
  fetchPromoFilm,
  fetchSimilarFilms,
} from '../store/api-actions';
import { usePromoFilmSelector } from '../store/promo-film/selectors';
import { useAllFilmsSelector } from '../store/all-films/selectors';
import {
  useCommentsSelector,
  useCurrentFilmSelector,
  useSimilarFilmsSelector,
} from '../store/current-film/selectors';
import { useFavouriteFilmsSelector } from '../store/user/selectors';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export function useFilms() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllFilms());
  }, [dispatch]);

  const { films, isLoading, currentGenre } = useAllFilmsSelector();
  return { films, isLoading, currentGenre };
}

export function usePromoFilm() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  const { data, isLoading } = usePromoFilmSelector();
  return { data, isLoading };
}

export function useFavouriteFilms() {
  const dispatch = useAppDispatch();

  const fetchFavouriteFilmsCallback = useCallback(() => {
    dispatch(fetchFavouriteFilms());
  }, [dispatch]);

  const { films, isLoading } = useFavouriteFilmsSelector();
  return { films, isLoading, fetchFavouriteFilmsCallback };
}

export function useCurrentFilm(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentFilm(id));
  }, [dispatch, id]);

  const { data, isLoading, isNotFound } = useCurrentFilmSelector();
  return { data, isLoading, isNotFound };
}

export function useSimilarFilms(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSimilarFilms(id));
  }, [dispatch, id]);

  const { films, isLoading } = useSimilarFilmsSelector();
  return { films: films, isLoading };
}

export function useComments(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const { comments, isLoading } = useCommentsSelector();
  return { comments, isLoading };
}
