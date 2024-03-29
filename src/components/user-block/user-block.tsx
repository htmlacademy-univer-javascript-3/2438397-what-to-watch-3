import { ReactElement } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../types/authorization-status';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app/app-types';
import { logOut } from '../../store/api-actions';
import {
  useAuthorizationStatusSelector,
  useUserSelector,
} from '../../store/user/selectors';

export function UserBlock(): ReactElement {
  const authorizationStatus = useAuthorizationStatusSelector();
  const user = useUserSelector();
  const dispatch = useAppDispatch();

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img
              src={user?.avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={(event) => {
            event.preventDefault();
            dispatch(logOut());
          }}
        >
          Sign out
        </a>
      </li>
    </ul>
  ) : (
    <ul className="user-block">
      <li className="user-block__item">
        <Link className="user-block__link" to={AppRoute.SingIn}>
          Sign in
        </Link>
      </li>
    </ul>
  );
}
