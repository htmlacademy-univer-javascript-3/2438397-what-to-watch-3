import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppState} from '../types/actionType';
import {useCallback, useEffect} from 'react';
import {
  FetchAllFilms,
  FetchComments,
  FetchCurrentFilm,
  FetchFavouriteFilms,
  FetchPromoFilm,
  FetchSimilarFilms
} from '../store/apiActions';
import {usePromoFilmSelector} from '../store/filmPromo/selectors';
import {useAllFilmsSelector} from '../store/allFilms/selectors';
import {useCommentsSelector, useCurrentFilmSelector, useSimilarFilmsSelector} from '../store/currentFilm/selectors';
import {useFavouriteFilmsSelector} from '../store/user/selectors';

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

  const {data, isLoading} = useFavouriteFilmsSelector();
  return {data, isLoading, fetchFavouriteFilmsCallback};
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

  const { data, isLoading } = useSimilarFilmsSelector();
  return { data, isLoading };
}

export function useComments(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchComments(id));
  }, [dispatch, id]);

  const {data, isLoading} = useCommentsSelector();
  return { data, isLoading };
}
