function getNumberWithLeadZeroes(number: number): string {
  if (Math.round(number) < 10) {
    return `0${Math.round(number)}`;
  }
  return `${Math.round(number)}`;
}

export function convertTimeToPlayerFormat(time: number): string {
  if (time < 60 * 60) {
    return `-${getNumberWithLeadZeroes(time / 60)}:${getNumberWithLeadZeroes(
      time % 60,
    )}`;
  }
  return `-${getNumberWithLeadZeroes(time / 3600)}:${getNumberWithLeadZeroes(
    (time % 3600) / 60,
  )}:${getNumberWithLeadZeroes(time % 60)}`;
}
