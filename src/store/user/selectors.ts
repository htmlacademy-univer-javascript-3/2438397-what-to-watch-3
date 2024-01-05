import { AuthorizationStatus } from '../../types/authorization-status';
import { useAppSelector } from '../../hooks';
import { User } from '../../types/user';
import { Namespace } from '../namespace';

export function useAuthorizationStatusSelector(): AuthorizationStatus {
  return useAppSelector((state) => state[Namespace.User].authorizationStatus);
}

export function useUserSelector(): User | null {
  return useAppSelector((state) => state[Namespace.User].user);
}

export function useFavouriteFilmsSelector() {
  return useAppSelector((state) => state[Namespace.User].favouriteFilms);
}
