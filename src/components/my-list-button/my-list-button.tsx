import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useFavouriteFilms } from '../../hooks';
import { postFavouriteFilm } from '../../store/api-actions';

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

  const dispatch = useAppDispatch();

  return (
    <button
      className="btn btn--list film-card__button"
      onClick={(event) => {
        event.preventDefault();
        if (filmId) {
          dispatch(
            postFavouriteFilm({
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
        <use
          data-testid={'svg-is-added'}
          xlinkHref={isFavourite ? '#in-list' : '#add'}
        />
      </svg>
      <span>My list</span>
      <span className="film-card__count">{films.length}</span>
    </button>
  );
}
