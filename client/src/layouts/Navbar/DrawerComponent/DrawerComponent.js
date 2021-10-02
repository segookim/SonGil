import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import InfoIcon from '@material-ui/icons/Info';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MessageIcon from '@material-ui/icons/Message';


const DrawerComponent = () => {
  const useStyles = makeStyles(theme => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginRight: 'auto',
      color: 'white',
    },

    menuIconToggle: {
      fontSize: '3rem',
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='left'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
        <List>
          <ListItem divider button component={Link} href="/" onClick={() => setOpenDrawer(false)}>
            <HomeIcon />
            <ListItemIcon >
              <ListItemText> Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button component={Link} href="/Explain" onClick={() => setOpenDrawer(false)} >
            <PlayCircleFilledWhiteIcon />
            <ListItemIcon >
              <ListItemText> Explain</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button component={Link} href="/About" onClick={() => setOpenDrawer(false)}>
            <InfoIcon />
            <ListItemIcon>
              <ListItemText> About</ListItemText>
            </ListItemIcon>
          </ListItem>

          {/* <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <AccountBoxIcon />
            <ListItemIcon>
              <ListItemText> Account</ListItemText>
            </ListItemIcon>
          </ListItem> */}
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
