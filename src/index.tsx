import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App, AppProps } from './app/app';
import { store } from './store';
import { Error } from './components/error/error';

import { MY_FILMS } from './mocks/films';
import { PLAYER } from './mocks/player';
import { CheckAuth } from './store/apiActions';

store.dispatch(CheckAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const APP_PROPS: AppProps = {
  myFilmsPageProps: {
    filmsList: MY_FILMS,
  },
  playerPageProps: PLAYER,
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App
        myFilmsPageProps={APP_PROPS.myFilmsPageProps}
        playerPageProps={APP_PROPS.playerPageProps}
      />
    </Provider>
  </React.StrictMode>,
);
