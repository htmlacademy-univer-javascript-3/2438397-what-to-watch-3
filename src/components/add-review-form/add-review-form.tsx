import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from './star';
import { useAppDispatch } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import { AppRoute } from '../../app/app-types';

export type ReviewForm = {
  id: string;
  rating: number;
  comment: string;
};

const STARS_NUMBER = 10;

export type AddReviewFormProps = {
  id: string;
};

export function AddReviewForm({ id }: AddReviewFormProps): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [reviewForm, setReviewForm] = useState<ReviewForm>({
    id: id,
    rating: 0,
    comment: '',
  });

  return (
    <div className="add-review">
      <form action="addReviewPage#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from(Array(STARS_NUMBER).keys()).map((i) => (
              <Star
                key={STARS_NUMBER - i}
                value={STARS_NUMBER - i}
                onClick={() =>
                  setReviewForm({ ...reviewForm, rating: STARS_NUMBER - i })}
              />
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(e) =>
              setReviewForm({ ...reviewForm, comment: e.target.value })}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                dispatch(
                  postCommentAction({
                    filmId: id,
                    comment: reviewForm.comment,
                    rating: reviewForm.rating,
                  }),
                ).then((result) => {
                  if (result.payload) {
                    navigate(AppRoute.Film(id));
                  }
                });
              }}
              disabled={
                reviewForm.rating === 0 ||
                reviewForm.comment.length < 50 ||
                reviewForm.comment.length > 400
              }
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
