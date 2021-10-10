import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
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

  const classes = useStyles();


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
            <IconButton href="/" color="inherit">
                SonGil
            </IconButton>
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Navbar;