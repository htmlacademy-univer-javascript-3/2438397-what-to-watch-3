import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from './app-types';
import { AuthorizationStatus } from '../types/authorization-status';
import { useAuthorizationStatusSelector } from '../store/user/selectors';
import { Spinner } from '../components/spinner/spinner';

export type AuthorizationProps = {
  child: ReactElement;
};

export function PrivateRoute({ child }: AuthorizationProps): ReactElement {
  const authorizationStatus = useAuthorizationStatusSelector();
  return authorizationStatus === AuthorizationStatus.Auth ? (
    child
  ) : (
    <Spinner isLoading={authorizationStatus === AuthorizationStatus.Unknown}>
      <Navigate to={AppRoute.SingIn} />
    </Spinner>
  );
}
