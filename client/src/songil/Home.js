// // Import dependencies

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
          {children}
          {/* <Typography>{children}</Typography> */}
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
  const [transText, setTransText] = useState('');
  const [textList, setTextList] = useState(['']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function example() {
    setTransText('');
    setTextList(['']);
  }


  function add() {
    let now = textList;
    console.log(transText);
  
    now.push([transText]);
    setTextList(now);
    console.log(textList);    
  }

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
          <LinkTab label="Motion Sign To Text" disabled style={{color: "#000"}} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignToText setTransText = {setTransText}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SoundToText setTransText = {setTransText} add = {add} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>

      <div id="trans">
        <button
          onClick={()=>example()}
        >
          초기화
        </button>
        <div style={{color: "#FFFFFF", margin: "10px"}}>
          {/* {transText} */}
        </div>
        <div>
          {textList.map(text => (
            <div> {text} </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}


export default RealTimeObjectDetection;
