import { describe } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AddReviewForm } from './add-review-form';
import { act, fireEvent, render } from '@testing-library/react';
import { store } from '../../store';

const reviewForm = (
  <Provider store={store}>
    <BrowserRouter>
      <AddReviewForm id={'da'} />
    </BrowserRouter>
  </Provider>
);

describe('add-review-form', () => {
  it('should button disabled on empty form', () => {
    const { getByText } = render(reviewForm);
    const submitButton = getByText('Post');

    expect(submitButton).toHaveAttribute('disabled');
  });

  it('should button enabled on filled form', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(reviewForm);
    const ratingButton = getByTestId('star-1');
    const commentInput = getByPlaceholderText('Review text');
    const submitButton = getByText('Post');

    act(() => {
      ratingButton.click();
      fireEvent.change(commentInput, { target: { value: 'z'.repeat(100) } });
    });
    expect(submitButton).not.toHaveAttribute('disabled');
  });
});
