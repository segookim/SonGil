// import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    Root:{
      // height : 150,
      fontSize: "3vw"
    },
    ToolBar: {
      marginTop : "1%",
      marginBottom : "1%",
    }
  }));

export const Navbar = () => {
  //Hooks

  const classes = useStyles();


  return (
    <div>
      <AppBar className={classes.Root} elevation={0} color='primary' position="static">
        <Toolbar className={classes.ToolBar}>
            <IconButton href="/" color="inherit">
              메인페이지
            </IconButton>
            <IconButton href="/Explain" color="inherit">
              도움말
            </IconButton>
            <IconButton href="/HandInfo" color="inherit">
              지원 수어 살펴보기
            </IconButton>
            <IconButton href="/About" color="inherit">
              개발자소개
            </IconButton>
        </Toolbar>
      </AppBar>
      
    </div>
  );
};

export default Navbar;