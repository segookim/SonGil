// import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import { reducers } from './reducers';
// import App from './App';
// import './bootstrap.min.css';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css';


class Index extends Component {
  state = {
    contentCached: false,
    updateAvailable: false,
  };

  componentDidMount() {
    const config = {
      onUpdate: this.handleUpdate,
    };

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register(config);
  }

  render() {
    return (
      <Router>
        <App updateAvailable={this.state.updateAvailable} />
      </Router>
    );
  }

  handleUpdate = (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
    this.setState({ updateAvailable: true});
  }
}

// ReactDOM.render(<Index />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
