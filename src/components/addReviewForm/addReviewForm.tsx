import {ReactElement, useState} from 'react';
import {Star} from './star';

export type AddReviewProps = {
  id: number;
  name: string;
  imgSrc: string;
  bgImgSrc: string;
};

export type ReviewForm = {
  rating: number;
  comment: string;
};

const STARS_NUMBER = 10;

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
            {Array.from(Array(STARS_NUMBER).keys()).map((i) => (
              <Star key={STARS_NUMBER - i} value={STARS_NUMBER - i} onClick={() => setReviewForm({...reviewForm, rating: STARS_NUMBER - i})} />
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
