import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from './app-types';
import { AuthorizationStatus } from '../types/authorization-status';
import {useAuthorizationStatusSelector} from '../store/user/selectors';

export type AuthorizationProps = {
  child: ReactElement;
};

export function PrivateRoute({ child }: AuthorizationProps): ReactElement {
  const authorizationStatus = useAuthorizationStatusSelector();

  return authorizationStatus === AuthorizationStatus.Auth ? (
    child
  ) : (
    <Navigate to={AppRoute.SingIn} />
  );
}
