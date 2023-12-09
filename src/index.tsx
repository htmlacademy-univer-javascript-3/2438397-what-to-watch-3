import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App, AppProps } from './app/app';
import { store } from './store';
import { Error } from './components/error/error';

import { PLAYER } from './mocks/player';
import { CheckAuth } from './store/apiActions';

store.dispatch(CheckAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const APP_PROPS: AppProps = {
  playerPageProps: PLAYER,
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App playerPageProps={APP_PROPS.playerPageProps} />
    </Provider>
  </React.StrictMode>,
);
