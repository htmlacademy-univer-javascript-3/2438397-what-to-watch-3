import { Fragment, ReactElement } from 'react';
import { FilmInfo } from '../../types/film';
import { FilmDescription } from './film-description';
import { getShortActorsList } from '../../helpers/get-short-actors-list';
import { getRatingLevel } from '../../helpers/get-rating-level';

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
            {getRatingLevel(film?.rating || 0)}
          </span>
          <span className="film-rating__count">
            {film?.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <FilmDescription description={film?.description || ''} />

        <p className="film-card__director">
          <strong>Director: {film?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {getShortActorsList(film?.starring || [])}</strong>
        </p>
      </div>
    </Fragment>
  );
}
