import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-rpikvhbdj7n4jftn.us.auth0.com"
    clientId="LuhL8rIo66Nl4g7eHfLdTzWuNTouKDtx"
    authorizationParams={{
      redirect_uri: window?.location?.origin
    }}
  >
    <App />
  </Auth0Provider>,
);