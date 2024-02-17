import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  
);


