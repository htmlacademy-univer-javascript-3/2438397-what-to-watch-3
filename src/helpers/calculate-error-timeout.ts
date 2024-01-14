const SYMBOLS_BLOCK_SIZE = 35;
const TIME_PER_SYMBOLS_BLOCK = 2000;

export function calculateErrorTimeout(message: string | null): number {
  if (message === null) {
    return 0;
  }
  return Math.ceil(message.length / SYMBOLS_BLOCK_SIZE) * TIME_PER_SYMBOLS_BLOCK;
}
