import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store/store.js';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-oz8qfoyi7ulqh7ta.us.auth0.com"
    clientId="x9vuuypfoUPiMFv6l2a3ujDqAFMEtdOm"
	returnTo="http://localhost:5173/login"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);





