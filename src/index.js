import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './bootstrap.min.css';


class Index extends Component {

  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }

}

// ReactDOM.render(<Index />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
