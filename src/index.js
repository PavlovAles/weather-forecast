import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/app/App';

const container = document.getElementById('root');
const root = createRoot(container);

/* eslint-disable react/jsx-filename-extension, comma-dangle */
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
