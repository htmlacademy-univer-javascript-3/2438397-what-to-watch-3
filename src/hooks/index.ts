import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../types/actionType';
import { useEffect } from 'react';
import {FetchAllFilms, FetchPromoFilm} from '../store/apiActions';
import {useAllFilmsSelector, usePromoFilmSelector} from '../store/selectors';

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
  return { data: data, isLoading };
}
