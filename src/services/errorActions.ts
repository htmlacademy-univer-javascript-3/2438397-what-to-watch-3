import {SetError} from '../store/actions';
import {ClearError} from '../store/actions';
import {useAppDispatch} from '../hooks';

export function HandleError(message: string): void {
  const dispatch = useAppDispatch();

  dispatch(SetError(message));
  dispatch(ClearError());
}
