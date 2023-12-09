import { ReactElement } from 'react';
import { FilmComment } from '../../types/filmComment';
import { ReviewCard } from '../reviewCard/reviewCard';

export type FilmOverviewReviewsProps = {
  reviews: FilmComment[];
};

export function FilmOverviewReviews({
  reviews,
}: FilmOverviewReviewsProps): ReactElement {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews
          .slice(Math.ceil(reviews.length / 2), reviews.length)
          .map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
}
