import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app';
import {AppProps} from './propsTypes/pagesProsTypes';
import {CATALOG_FILMS, FILM_PROMO, MY_FILMS} from './mocks/films';
import {PLAYER} from './mocks/player';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const APP_PROPS: AppProps = {
  mainPageProps: {
    filmPromo: FILM_PROMO,
    filmsCardList: CATALOG_FILMS,
  },
  myFilmsPageProps: {
    filmsCardList: MY_FILMS,
  },
  playerPageProps: PLAYER,
};

root.render(
  <React.StrictMode>
    <App mainPageProps={APP_PROPS.mainPageProps} myFilmsPageProps={APP_PROPS.myFilmsPageProps} playerPageProps={APP_PROPS.playerPageProps}/>
  </React.StrictMode>
);
