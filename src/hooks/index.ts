import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../types/action-type';
import { useCallback, useEffect } from 'react';
import {
  FetchAllFilms,
  FetchComments,
  FetchCurrentFilm,
  FetchFavouriteFilms,
  FetchPromoFilm,
  FetchSimilarFilms,
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
    dispatch(FetchAllFilms());
  }, [dispatch]);

  const { data, isLoading, currentGenre } = useAllFilmsSelector();
  return { data, isLoading, currentGenre };
}

export function usePromoFilm() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchPromoFilm());
  }, [dispatch]);

  const { data, isLoading } = usePromoFilmSelector();
  return { data, isLoading };
}

export function useFavouriteFilms() {
  const dispatch = useAppDispatch();

  const fetchFavouriteFilmsCallback = useCallback(() => {
    dispatch(FetchFavouriteFilms());
  }, [dispatch]);

  const { films, isLoading } = useFavouriteFilmsSelector();
  return { films, isLoading, fetchFavouriteFilmsCallback };
}

export function useCurrentFilm(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchCurrentFilm(id));
  }, [dispatch, id]);

  const { data, isLoading, isNotFound } = useCurrentFilmSelector();
  return { data, isLoading, isNotFound };
}

export function useSimilarFilms(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchSimilarFilms(id));
  }, [dispatch, id]);

  const { films, isLoading } = useSimilarFilmsSelector();
  return { films: films, isLoading };
}

export function useComments(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchComments(id));
  }, [dispatch, id]);

  const { comments, isLoading } = useCommentsSelector();
  return { comments, isLoading };
}
