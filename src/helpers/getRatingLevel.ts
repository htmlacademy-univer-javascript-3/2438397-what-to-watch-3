export function GetRatingLevel(rating: number): string {
  if (rating <= 2) {
    return 'Cringe';
  } else if (rating <= 4) {
    return 'Nu takoe';
  } else if (rating <= 6) {
    return 'Soydet';
  } else if (rating <= 8) {
    return 'Good';
  } else {
    return 'Very good';
  }
}
