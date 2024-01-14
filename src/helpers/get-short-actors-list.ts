const MAX_ACTORS_COUNT_IN_SHORT_LIST = 4;

export function getShortActorsList(actors: string[]) {
  if (actors.length <= MAX_ACTORS_COUNT_IN_SHORT_LIST) {
    return actors.join(', ');
  } else {
    return `${actors
      .slice(0, MAX_ACTORS_COUNT_IN_SHORT_LIST)
      .join(', ')} and other`;
  }
}
