function getNumberWithLeadZeroes(number: number): string {
  if (Math.round(number) < 10) {
    return `0${Math.round(number)}`;
  }
  return `${Math.round(number)}`;
}

export function convertTimeToPlayerFormat(time: number): string {
  if (time < 60 * 60) {
    return `-${getNumberWithLeadZeroes(
      Math.floor(time / 60),
    )}:${getNumberWithLeadZeroes(time % 60)}`;
  }
  return `-${getNumberWithLeadZeroes(
    Math.floor(time / 3600),
  )}:${getNumberWithLeadZeroes(
    Math.floor((time % 3600) / 60),
  )}:${getNumberWithLeadZeroes(time % 60)}`;
}
