import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { AppRoute } from './appTypes';
import { PrivateRoute } from './privateRoute';

import { MyListPage } from '../pages/myListPage/myListPage';
import { MainPage } from '../pages/mainPage/mainPage';
import { AddReviewPage } from '../pages/addReviewPage/addReviewPage';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';
import { PlayerPage } from '../pages/playerPage/playerPage';
import { SignInPage } from '../pages/signInPage/signInPage';
import {
  FilmOverviewPage,
} from '../pages/filmOverviewPage/filmOverviewPage';

export function App(): ReactElement {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                child={<MyListPage />}
              />
            }
          />
          <Route path={AppRoute.SingIn} element={<SignInPage />} />
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Film()}
            element={
              <FilmOverviewPage />
            }
          />
          <Route
            path={AppRoute.AddReview()}
            element={
              <AddReviewPage />
            }
          />
          <Route
            path={AppRoute.Player()}
            element={
              <PlayerPage />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
