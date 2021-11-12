import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
// import './bootstrap.min.css';
import './css/bootstrap.min.css';


import * as serviceWorkerRegistration from './pwa/serviceWorkerRegistration';
ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();