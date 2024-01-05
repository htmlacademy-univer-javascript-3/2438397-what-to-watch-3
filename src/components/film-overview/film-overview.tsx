import { Fragment, ReactElement } from 'react';
import { FilmInfo } from '../../types/film';
import { FilmDescription } from './film-description';
import { GetShortActorsList } from '../../helpers/get-short-actors-list';
import { GetRatingLevel } from '../../helpers/get-rating-level';

export type FilmOverviewProps = {
  film: FilmInfo | null;
};

export function FilmOverview({ film }: FilmOverviewProps): ReactElement {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {GetRatingLevel(film?.rating || 0)}
          </span>
          <span className="film-rating__count">
            {film?.reviewsNumber} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <FilmDescription description={film?.description || ''} />

        <p className="film-card__director">
          <strong>Director: {film?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {GetShortActorsList(film?.starring || [])}</strong>
        </p>
      </div>
    </Fragment>
  );
}
