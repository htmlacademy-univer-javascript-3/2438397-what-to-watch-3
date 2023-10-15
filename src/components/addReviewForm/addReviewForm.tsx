import {ReactElement, useState} from 'react';
import {Star} from './star';

export type ReviewForm = {
  rating: number;
  comment: string;
};

export function AddReviewForm(): ReactElement {
  const [reviewForm, setReviewForm] = useState<ReviewForm>({
    rating: 0,
    comment: '',
  });

  return (
    <div className="add-review">
      <form action="addReviewPage#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from(Array(10).keys()).map((i) => (
              <Star key={10 - i} value={10 - i} onClick={() => setReviewForm({...reviewForm, rating: 10 - i})} />
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
