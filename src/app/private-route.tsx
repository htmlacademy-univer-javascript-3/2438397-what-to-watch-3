import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from './app-types';
import { AuthorizationStatus } from '../types/authorization-status';
import { useAuthorizationStatusSelector } from '../store/user/selectors';
import { getToken } from '../services/token-services';

export type AuthorizationProps = {
  child: ReactElement;
};

export function PrivateRoute({ child }: AuthorizationProps): ReactElement {
  const authorizationStatus = useAuthorizationStatusSelector();
  // sometimes we have valid token, but api request about user is not completed yet, so authorization status is UNKNOWN
  const hasToken = getToken() !== '';
  return authorizationStatus === AuthorizationStatus.Auth || hasToken ? (
    child
  ) : (
    <Navigate to={AppRoute.SingIn} />
  );
}
