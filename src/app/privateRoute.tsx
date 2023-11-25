import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from './appTypes';
import { AuthorizationStatus } from '../types/authorizationStatus';

export type AuthorizationProps = {
  authorizationStatus: AuthorizationStatus;
  child: ReactElement;
};

export function PrivateRoute({
  authorizationStatus,
  child,
}: AuthorizationProps): ReactElement {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    child
  ) : (
    <Navigate to={AppRoute.SingIn} />
  );
}
