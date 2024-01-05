import { ReactElement, useEffect } from 'react';
import { useAuthorizationStatusSelector } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../types/authorization-status';
import { useAppDispatch, useFavouriteFilms } from '../../hooks';
import { PostFavouriteFilm } from '../../store/api-actions';

export type MyListButtonProps = {
  filmId: string;
};

export function MyListButton({
  filmId,
}: MyListButtonProps): ReactElement | null {
  const { films, fetchFavouriteFilmsCallback } = useFavouriteFilms();

  useEffect(() => {
    fetchFavouriteFilmsCallback();
  }, [fetchFavouriteFilmsCallback]);
  const isFavourite = films.some((film) => film.id === filmId);

  const authorizationStatus = useAuthorizationStatusSelector();

  const dispatch = useAppDispatch();

  return authorizationStatus === AuthorizationStatus.NoAuth ? null : (
    <button
      className="btn btn--list film-card__button"
      onClick={(event) => {
        event.preventDefault();
        if (filmId) {
          dispatch(
            PostFavouriteFilm({
              filmId: filmId,
              status: isFavourite ? 0 : 1,
            }),
          ).then(() => {
            fetchFavouriteFilmsCallback();
          });
        }
      }}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavourite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{films.length}</span>
    </button>
  );
}
