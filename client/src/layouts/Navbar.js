import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";



const useStyles = makeStyles((theme) => ({
    // menuButton: {
    //   marginRight: theme.spacing(2, 'auto')
    // },
    // loginButton:{
    //   marginLeft: 'auto'
    // },
    // title: {
    //   flexGrow: 1
    // },
    // customColor: {
    //   // or hex code, this is normal CSS background-color
    //   backgroundColor: green[500]
    // },
    // customHeight: {
    //   minHeight: 200
    // },
    // offset: theme.mixins.toolbar
    a:{
      height : 150,
    },
    b: {
      margin : 40,
    }
  }));

export const Navbar = () => {
  //Hooks

  const classes = useStyles();


  return (
    <div>
      <AppBar className={classes.a} elevation={0} color='primary' position="static">
        <Toolbar className={classes.b}>
            <IconButton href="/" color="inherit">
              Songil
            </IconButton>

            <IconButton href="/Explain" color="inherit">
                Explain
            </IconButton>

            <IconButton href="/About" color="inherit">
                About
            </IconButton>

        </Toolbar>
      </AppBar>
      
    </div>
  );
};

export default Navbar;