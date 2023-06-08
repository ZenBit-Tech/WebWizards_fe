import { PersistGate } from 'redux-persist/integration/react';
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { persistor, setupStore, store } from '@redux/store';
import 'styles.scss';

import { GoogleOAuthProvider } from '@react-oauth/google';


import AppRouter from './router';
import './translation/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <GoogleOAuthProvider clientId="813756898885-aguhp67cn9f8lfc6up172sp3k7uv9aht.apps.googleusercontent.com">

  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={null}>
            <AppRouter />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
  </GoogleOAuthProvider>

);
