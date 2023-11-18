import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app/appTypes';

export type PlayButtonProps = {
  videoId: number;
};

export function PlayButton({ videoId }: PlayButtonProps): ReactElement {
  return (
    <Link
      className="btn btn--play film-card__button"
      to={AppRoute.Player(videoId)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}
