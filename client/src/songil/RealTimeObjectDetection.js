// // Import dependencies
// import { ButtonGroup } from "@material-ui/core";
// import React, { useRef, useState, useEffect } from "react";
// import '../bootstrap.min.css';
// // import "./App.css";
// // 2. TODO - Import drawing utility here
// // e.g. import { drawRect } from "./utilities";

// /**
//  * Class to handle the rendering of the Home page.
//  * @extends React.Component
//  */


// function RealTimeObjectDetection() {

  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div style={{
//           color: "white",
//           marginTop:"10%",
//         }}>
//           <ButtonGroup>
//             <button></button>
//           </ButtonGroup>
//         </div>
//       </header>
//     </div>
//   );
// }


// export default RealTimeObjectDetection;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SignToText from './SignToText'
import SoundToText from './SoundToText'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#444444"
  },
}));

function RealTimeObjectDetection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{marginTop: "10%"}}
      >
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Motionless Sign To Text" {...a11yProps(0)} />
          <LinkTab label="Sound To Text" {...a11yProps(1)} />
          <LinkTab label="Motionless Sign To Text" disabled style={{color: "#000"}} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignToText/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SoundToText />
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </div>
  );
}


export default RealTimeObjectDetection;
