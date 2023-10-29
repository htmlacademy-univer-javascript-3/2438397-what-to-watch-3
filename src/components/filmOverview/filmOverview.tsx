import { Fragment, ReactElement } from 'react';
import { Film } from '../../types/film';

function GetRatingLevel(rating: number): string {
  if (rating <= 2) {
    return 'Cringe';
  } else if (rating <= 4) {
    return 'Nu takoe';
  } else if (rating <= 6) {
    return 'Soydet';
  } else if (rating <= 8) {
    return 'Good';
  } else {
    return 'Very good';
  }
}

function GetActors(actors: string[]) {
  if (actors.length <= 4) {
    return actors.join(', ');
  } else {
    return `${actors.slice(0, 4).join(', ')} and other`;
  }
}

function ConvertDescriptionText(description: string): ReactElement {
  return (
    <Fragment>
      {description.split('\n').map((paragraph) => (<p key={paragraph}>{paragraph}</p>))}
    </Fragment>
  );
}

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
        {ConvertDescriptionText(film.description)}

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {GetActors(film.actors)}</strong>
        </p>
      </div>
    </Fragment>
  );
}
