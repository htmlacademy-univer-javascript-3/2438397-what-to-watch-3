import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app/app';
import { store } from './store';
import { Error } from './components/error/error';

import { CheckAuth } from './store/apiActions';

store.dispatch(CheckAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App />
    </Provider>
  </React.StrictMode>,
);
