import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { AppRoute } from './app-types';
import { PrivateRoute } from './private-route';

import { MyListPage } from '../pages/my-list-page/my-list-page';
import { MainPage } from '../pages/main-page/main-page';
import { AddReviewPage } from '../pages/add-review-page/add-review-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { PlayerPage } from '../pages/player-page/player-page';
import { SignInPage } from '../pages/sign-in-page/sign-in-page';
import {
  FilmOverviewPage,
} from '../pages/film-overview-page/film-overview-page';

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
