import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";

import DrawerComponent from './DrawerComponent/DrawerComponent';


const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2, 'auto')
    },
    loginButton:{
      marginLeft: 'auto'
    },
    title: {
      flexGrow: 1
    },
    customColor: {
      // or hex code, this is normal CSS background-color
      backgroundColor: green[500]
    },
    customHeight: {
      minHeight: 200
    },
    offset: theme.mixins.toolbar
  }));

export const Navbar = () => {
  //Hooks
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  // const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  // const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  //Functions
  // const handleClickTab = (e, newValue) => {
  //   //The second value contains the current index
  //   setValue(newValue);
  // };

  // const handleOpenMenu = e => {
  //   setAnchorEl(e.currentTarget);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar elevation={0} color='primary' position="static">
        <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
            >
                <DrawerComponent />
            </IconButton>
            {/* <Typography variant="h6" className={classes.title}>
                SonGil
            </Typography> */}
            <IconButton 
              href="/" 
              color="inherit"
            >
                SonGil
            </IconButton>
            {/* <IconButton
              edge="end" 
              className={classes.loginButton} 
              href="/Account" 
              color="inherit"
            >
                Login
            </IconButton> */}
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        style={{ marginTop: '50px' }}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Explain</MenuItem>
        <MenuItem onClick={handleCloseMenu}>About</MenuItem>
        {/* <MenuItem onClick={handleCloseMenu}>Account</MenuItem> */}
      </Menu>
    </>
  );
};

export default Navbar;