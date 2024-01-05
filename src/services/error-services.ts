import { SetError } from '../store/error/actions';
import { ClearError } from '../store/error/actions';
import { store } from '../store';
import { calculateErrorTimeout } from '../helpers/calculate-error-timeout';

export function HandleError(message: string | null): void {
  if (message === null) {
    return;
  }
  store.dispatch(SetError(message));
  store.dispatch(ClearError(calculateErrorTimeout(message)));
}
