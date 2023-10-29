import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app/appTypes';

const MY_LIST_LENGTH = 9;

export function MyListButton(): ReactElement {
  return (
    <Link className="btn btn--list film-card__button" to={AppRoute.MyList}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{MY_LIST_LENGTH}</span>
    </Link>
  );
}
