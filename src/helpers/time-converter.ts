function GetNumberWithLeadZeroes(number: number): string {
  if (Math.round(number) < 10) {
    return `0${Math.round(number)}`;
  }
  return `${Math.round(number)}`;
}

export function ConvertTimeToPlayerFormat(time: number): string {
  return `${GetNumberWithLeadZeroes(time / 3600)}:${GetNumberWithLeadZeroes(time % 3600 / 60)}:${GetNumberWithLeadZeroes(time % 60)}`;
}
