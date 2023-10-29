import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, AppProps} from './app/app';
import {CATALOG_FILMS, FILM_OVERVIEW, FILM_PROMO, MY_FILMS} from './mocks/films';
import {PLAYER} from './mocks/player';
import {REVIEW} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const APP_PROPS: AppProps = {
  mainPageProps: {
    filmPromo: FILM_PROMO,
    filmsCardList: CATALOG_FILMS,
  },
  myFilmsPageProps: {
    filmsList: MY_FILMS,
  },
  playerPageProps: PLAYER,
  addReviewPageProps: REVIEW,
  filmOverviewPageProps: FILM_OVERVIEW,
};

root.render(
  <React.StrictMode>
    <App mainPageProps={APP_PROPS.mainPageProps} myFilmsPageProps={APP_PROPS.myFilmsPageProps} playerPageProps={APP_PROPS.playerPageProps} addReviewPageProps={APP_PROPS.addReviewPageProps} filmOverviewPageProps={APP_PROPS.filmOverviewPageProps}/>
  </React.StrictMode>
);
