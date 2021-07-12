import React, { Component } from 'react';

//material-ui
import { Container } from '@material-ui/core';

// import Home from './layouts/Home'

import { PropTypes } from 'prop-types';

// import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar } from  './layouts/Navbar/Navbar';
import Routes from './Routes';

// import './App.css';
import './bootstrap.min.css';
import Footer from './layouts/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    const reloadMsg = `
      New content is available.<br />
      Please <a href='javascript:location.reload();'>reload</a>.<br />
      <small>If reloading doesn't work, close all tabs/windows of this web application,
      and then reopen the application.</small>
    `;
    this.state = {
      showUpdateAlert: true,
      reloadMsg: reloadMsg
    };
  }

  dismissUpdateAlert = event => {
    this.setState({ showUpdateAlert: false });
  }

  render() {
    return (
        <div className="App">
          <Navbar />
          <Container>
            <Routes />
          </Container>
          <Footer />
        </div>
    );
  }
}

App.propTypes = {
  // updateAvailable: PropTypes.bool.isRequired,
};

export default withRouter(App);