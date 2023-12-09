import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../types/actionType';
import { useEffect } from 'react';
import {FetchAllFilms, FetchComments, FetchCurrentFilm, FetchPromoFilm, FetchSimilarFilms} from '../store/apiActions';
import {
  useAllFilmsSelector, useCommentsSelector,
  useCurrentFilmSelector,
  usePromoFilmSelector,
  useSimilarFilmsSelector
} from '../store/selectors';

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
