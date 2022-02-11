import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render( 
    <Auth0Provider
        domain="clubculture-dev.eu.auth0.com"
        clientId="4XeZcbuBtIdIpSjq36MS2pNP5GaFvQJF"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>, 
    
    
    
    document.getElementById('root'));

