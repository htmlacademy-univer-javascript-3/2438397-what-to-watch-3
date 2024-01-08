import { ErrorType } from '../types/error';

const COMMON_ERROR_TYPE = 'COMMON_ERROR';

export function getErrorMessage(error: ErrorType): string | null {
  if (error.errorType === COMMON_ERROR_TYPE) {
    return null;
  }
  const errors: string[] = [];
  for (const detail of error.details) {
    if (detail.messages.length !== 0) {
      errors.push(detail.messages.join(', '));
    }
  }
  if (errors.length === 0) {
    errors.push(error.message);
  }
  return errors.join(', ');
}
