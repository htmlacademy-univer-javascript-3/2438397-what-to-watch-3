import { Fragment, ReactElement } from 'react';
import { Film } from '../../types/film';
import { FilmDescription } from './filmDescription';
import { GetRatingLevel, GetShortActorsList } from './helpers';

export type FilmOverviewProps = {
  film: Film;
};

export function FilmOverview({ film }: FilmOverviewProps): ReactElement {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {GetRatingLevel(film.rating)}
          </span>
          <span className="film-rating__count">
            {film.reviewsNumber} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <FilmDescription description={film.description} />

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {GetShortActorsList(film.actors)}</strong>
        </p>
      </div>
    </Fragment>
  );
}
