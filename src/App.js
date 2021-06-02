import React, { useState, useEffect, Component } from 'react';
import { useDispatch } from 'react-redux';

//material-ui
import { Container, AppBar, Typography, Button, Grow, Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

// import Home from './layouts/Home'

import { PropTypes } from 'prop-types';
// import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from  './layouts/Navbar/Navbar';
import AlertDismissable from './components/AlertDismissable';
import Routes from './Routes';
// import './App.css';
import './bootstrap.min.css';


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
          <Container>
            {/* <Navbar /> */}
            <Navbar collapseOnSelect className="app-nav-bar" variant="dark" expand="lg">
              <Navbar.Brand href="/">WebClassify</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Link className="nav-link" to="/">Classify</Link>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* { this.props.updateAvailable && this.state.showUpdateAlert &&
              <div style={{paddingTop: '10px'}}>
                <AlertDismissable
                  title=""
                  variant="info"
                  message={this.state.reloadMsg}
                  show={this.props.updateAvailable && this.state.showUpdateAlert}
                  onClose={this.dismissUpdateAlert} />
              </div>
            } */}
          </Container>
          <Container>
            <Routes />
          </Container>
        </div>
    );
  }
}

App.propTypes = {
  updateAvailable: PropTypes.bool.isRequired,
};

export default withRouter(App);

// function App() {
//   return (
//     <Layout>
//       <Container style={{ minHeight: "75vh"}}></Container>
//     </Layout>
//   );
// }

// export default App;

// const App = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const [example, setExample] = useState("primary");
//   const isCustomColor = example === "customColor";
//   const isCustomHeight = example === "customHeight";

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

//   return (
//     <React.Fragment>
//       <AppBar
//         color={isCustomColor || isCustomHeight ? "primary" : example}
//         className={`${isCustomColor && classes.customColor} ${
//           isCustomHeight && classes.customHeight
//         }`}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             SonGil
//           </Typography>
//           {/* <Button float="right" color="inherit">Login</Button> */}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
    // <Container maxWidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">Songil</Typography>
    //     <img className={classes.image} src={memories} alt="icon" height="60" />
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid container justify="space-between" alignItems="stretch" spacing={3}>
    //         <Grid item xs={12} sm={7}>
    //           <Posts setCurrentId={setCurrentId} />
    //         </Grid>
    //         <Grid item xs={12} sm={4}>
    //           <Form currentId={currentId} setCurrentId={setCurrentId} />
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
//   );
// };

// export default App;
