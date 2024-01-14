const MAX_BAD_RATING = 2;
const MAX_NORMAL_RATING = 4;
const MAX_GOOD_RATING = 7;
const MAX_VERY_GOOD_RATING = 9;

export function getRatingLevel(rating: number): string {
  if (rating <= MAX_BAD_RATING) {
    return 'Bad';
  } else if (rating <= MAX_NORMAL_RATING) {
    return 'Normal';
  } else if (rating <= MAX_GOOD_RATING) {
    return 'Good';
  } else if (rating <= MAX_VERY_GOOD_RATING) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
}
