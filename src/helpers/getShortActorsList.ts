export function GetShortActorsList(actors: string[]) {
  if (actors.length <= 4) {
    return actors.join(', ');
  } else {
    return `${actors.slice(0, 4).join(', ')} and other`;
  }
}
