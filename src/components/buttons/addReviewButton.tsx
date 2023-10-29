import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app/appTypes';

export type AddReviewButtonProps = {
  filmId: number;
};

export function AddReviewButton({
  filmId,
}: AddReviewButtonProps): ReactElement {
  return (
    <Link
      className="btn btn--play film-card__button"
      to={AppRoute.AddReview(filmId)}
    >
      Add review
    </Link>
  );
}
