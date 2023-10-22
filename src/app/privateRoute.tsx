import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthorizationStatus, AppRoute } from './appTypes';

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
