import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from './appTypes';
import { AuthorizationStatus } from '../types/authorizationStatus';
import { useAppSelector } from '../hooks';

export type AuthorizationProps = {
  child: ReactElement;
};

export function PrivateRoute({ child }: AuthorizationProps): ReactElement {
  const { authorizationStatus } = useAppSelector((state) => state);

  return authorizationStatus === AuthorizationStatus.Auth ? (
    child
  ) : (
    <Navigate to={AppRoute.SingIn} />
  );
}
