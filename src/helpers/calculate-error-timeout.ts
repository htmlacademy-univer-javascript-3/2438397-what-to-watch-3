export function calculateErrorTimeout(message: string | null): number {
  if (message === null) {
    return 0;
  }
  return Math.ceil(message.length / 35) * 2000;
}
