const SECOND_DURATION = 1;
const MINUTE_DURATION = SECOND_DURATION * 60;
const HOUR_DURATION = MINUTE_DURATION * 60;

const MAX_NUMBER_TO_ADD_ZERO = 9;

function getNumberWithLeadZeroes(number: number): string {
  if (Math.round(number) <= MAX_NUMBER_TO_ADD_ZERO) {
    return `0${Math.round(number)}`;
  }
  return `${Math.round(number)}`;
}

export function convertTimeToPlayerFormat(time: number): string {
  if (time < HOUR_DURATION) {
    return `-${getNumberWithLeadZeroes(
      Math.floor(time / MINUTE_DURATION),
    )}:${getNumberWithLeadZeroes(time % MINUTE_DURATION)}`;
  }
  return `-${getNumberWithLeadZeroes(
    Math.floor(time / HOUR_DURATION),
  )}:${getNumberWithLeadZeroes(
    Math.floor((time % HOUR_DURATION) / MINUTE_DURATION),
  )}:${getNumberWithLeadZeroes(time % MINUTE_DURATION)}`;
}
