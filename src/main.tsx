import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
