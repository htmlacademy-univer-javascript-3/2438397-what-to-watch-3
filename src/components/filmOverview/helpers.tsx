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

export function GetShortActorsList(actors: string[]) {
  if (actors.length <= 4) {
    return actors.join(', ');
  } else {
    return `${actors.slice(0, 4).join(', ')} and other`;
  }
}
