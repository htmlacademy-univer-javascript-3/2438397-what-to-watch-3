import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { AppRoute } from './appTypes';
import { PrivateRoute } from './privateRoute';
import { AuthorizationStatus } from './appTypes';

import { MyFilmsPageProps, MyListPage } from '../pages/myListPage/myListPage';
import { MainPage, MainPageProps } from '../pages/mainPage/mainPage';
import { MoviePage } from '../pages/moviePage/moviePage';
import { AddReviewPage } from '../pages/addReviewPage/addReviewPage';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';
import { PlayerPage, PlayerProps } from '../pages/playerPage/playerPage';
import { SignInPage } from '../pages/signInPage/signInPage';
import { AddReviewProps } from '../components/addReviewForm/addReviewForm';

export type AppProps = {
  mainPageProps: MainPageProps;
  myFilmsPageProps: MyFilmsPageProps;
  playerPageProps: PlayerProps;
  addReviewPageProps: AddReviewProps;
};

export function App({
  mainPageProps,
  myFilmsPageProps,
  playerPageProps,
  addReviewPageProps,
}: AppProps): ReactElement {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
                child={
                  <MyListPage filmsCardList={myFilmsPageProps.filmsCardList} />
                }
              />
            }
          />
          <Route path={AppRoute.SingIn} element={<SignInPage />} />
          <Route
            path={AppRoute.Root}
            element={
              <MainPage
                filmsCardList={mainPageProps.filmsCardList}
                filmPromo={mainPageProps.filmPromo}
              />
            }
          />
          <Route path={AppRoute.Film()} element={<MoviePage />} />
          <Route
            path={AppRoute.AddReview()}
            element={
              <AddReviewPage
                id={addReviewPageProps.id}
                name={addReviewPageProps.name}
                imgSrc={addReviewPageProps.imgSrc}
                bgImgSrc={addReviewPageProps.bgImgSrc}
              />
            }
          />
          <Route
            path={AppRoute.Player()}
            element={
              <PlayerPage
                videoSrc={playerPageProps.videoSrc}
                posterSrc={playerPageProps.posterSrc}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
