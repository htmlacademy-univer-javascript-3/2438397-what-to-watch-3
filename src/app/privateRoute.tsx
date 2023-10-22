import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthorizationProps } from '../propsTypes/componentsPropsTypes';
import { AuthorizationStatus, AppRoute } from './appTypes';

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
