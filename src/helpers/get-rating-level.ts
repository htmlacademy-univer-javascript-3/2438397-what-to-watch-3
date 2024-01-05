export function GetRatingLevel(rating: number): string {
  if (rating <= 2) {
    return 'Bad';
  } else if (rating <= 4) {
    return 'Normal';
  } else if (rating <= 7) {
    return 'Good';
  } else if (rating <= 9) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
}
