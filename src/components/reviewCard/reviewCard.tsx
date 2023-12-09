import { ReactElement } from 'react';
import { FilmComment } from '../../types/filmComment';

export type ReviewCardProps = {
  review: FilmComment;
};

export function ReviewCard({ review }: ReviewCardProps): ReactElement {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">Kate Muir</cite>
          <time className="review__date" dateTime={review.date}>
            {review.date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
