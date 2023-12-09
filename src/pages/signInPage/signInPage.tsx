import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData } from '../../types/authData';
import { LogIn } from '../../store/apiActions';
import { AppRoute } from '../../app/appTypes';
import { AuthorizationStatus } from '../../types/authorizationStatus';

export function SignInPage(): ReactElement {
  const { authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [authData, setAuthData] = useState<AuthData>({
    email: '',
    password: '',
  });

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Root);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={authData.email}
                onChange={(event) =>
                  setAuthData({ ...authData, email: event.target.value })
                }
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={authData.password}
                onChange={(event) =>
                  setAuthData({ ...authData, password: event.target.value })
                }
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                dispatch(LogIn(authData));
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
