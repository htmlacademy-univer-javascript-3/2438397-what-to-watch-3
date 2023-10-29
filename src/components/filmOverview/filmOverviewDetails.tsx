import { Fragment, ReactElement } from 'react';
import { Film } from '../../types/film';

export type FilmOverviewDetailsProps = {
  film: Film;
};

type ActorsListComponent = {
  actors: string[];
};

export function GetActorsListComponent({
  actors,
}: ActorsListComponent): ReactElement {
  return (
    <Fragment>
      {actors.map((actor) => (
        <Fragment key={actor}>
          {actor}, <br />
        </Fragment>
      ))}
    </Fragment>
  );
}

export function FilmOverviewDetails({
  film,
}: FilmOverviewDetailsProps): ReactElement {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            <GetActorsListComponent actors={film.actors} />
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {Math.floor(film.durationMinutes / 60)}h {film.durationMinutes % 60}
            m
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.releaseDate}</span>
        </p>
      </div>
    </div>
  );
}
