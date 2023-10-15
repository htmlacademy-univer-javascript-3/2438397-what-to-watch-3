import {ReactElement} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import {AppRoute} from './appTypes';
import {PrivateRoute} from './privateRoute';
import {AuthorizationStatus} from './appTypes';

import {MyListPage} from '../pages/myListPage/myListPage';
import {MainPage} from '../pages/mainPage/mainPage';
import {MoviePage} from '../pages/moviePage/moviePage';
import {AddReviewPage} from '../pages/addReviewPage/addReviewPage';
import {NotFoundPage} from '../pages/notFoundPage/notFoundPage';
import {PlayerPage} from '../pages/playerPage/playerPage';
import {SignInPage} from '../pages/signInPage/signInPage';

import {FILM_PROMO_PROPS} from '../mocks/mocks';

export function App(): ReactElement {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} child={<MyListPage />} />} />
          <Route path={AppRoute.SingIn} element={<SignInPage/>} />
          <Route
            path={AppRoute.Root}
            element={<MainPage name={FILM_PROMO_PROPS.name} genre={FILM_PROMO_PROPS.genre} releaseDate={FILM_PROMO_PROPS.releaseDate} imgSrc={FILM_PROMO_PROPS.imgSrc} bgImgSrc={FILM_PROMO_PROPS.bgImgSrc} />}
          />
          <Route path={AppRoute.Film} element={<MoviePage />} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
