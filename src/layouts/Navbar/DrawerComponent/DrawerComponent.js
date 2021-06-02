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
            <ListItemIcon >
              <ListItemText> Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button component={Link} href="/RealTimeObjectDetection" onClick={() => setOpenDrawer(false)} >
            <ListItemIcon >
              <ListItemText> Start</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button component={Link} href="/About" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> About</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> Account</ListItemText>
            </ListItemIcon>
          </ListItem>
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
