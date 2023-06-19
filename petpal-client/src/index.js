import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import useKeycloakAuth from './hooks/useKeycloakAuth';

// HTTP

const _axios = axios.create();

_axios.interceptors.request.use((config) => {
    const { isAuthenticated, token, updateToken } = useKeycloakAuth();
  if (isAuthenticated) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${token}`;
      return Promise.resolve(config);
    };
    return updateToken(cb);
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
