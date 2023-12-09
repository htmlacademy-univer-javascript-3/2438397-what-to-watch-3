import { AuthorizationStatus } from '../../types/authorizationStatus';
import { useAppSelector } from '../../hooks';
import { User } from '../../types/user';
import { Namespace } from '../namespace';

export function useAuthorizationStatusSelector(): AuthorizationStatus {
  return useAppSelector((state) => state[Namespace.User].authorizationStatus);
}

export function useUserSelector(): User | null {
  return useAppSelector((state) => state[Namespace.User].user);
}
