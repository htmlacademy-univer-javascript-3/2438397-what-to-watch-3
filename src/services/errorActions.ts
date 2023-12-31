import { SetError } from '../store/error/actions';
import { ClearError } from '../store/error/actions';
import { store } from '../store';
import { CalculateErrorTimeout } from '../helpers/calculateErrorTimeout';

export function HandleError(message: string | null): void {
  if (message === null) {
    return;
  }
  store.dispatch(SetError(message));
  store.dispatch(ClearError(CalculateErrorTimeout(message)));
}
