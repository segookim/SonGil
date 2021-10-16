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

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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
  const [Caption, setCaption] = useState(['']);
  const [Text, setText] = useState(['']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    //SoundToText
    const {
      transcript,
      listening,
      resetTranscript,
      //browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    const startHandle = () => {
      SpeechRecognition.startListening({language: 'ko', continuous: true});
    };
    
    const stopHandle = async () => {
      SpeechRecognition.stopListening();
      resetTranscript();
    };

  function reset() {
    setCaption(['']);
    resetTranscript();
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
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignToText setCaption  = {setCaption}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SoundToText startHandle={startHandle} stopHandle={stopHandle} resetTranscript={resetTranscript} transcript={transcript} listening={listening} setTextsetText = {setText} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
      <div style = {{
          display:"block",
          }
        }>
        <div style = {{
          marginLeft: "3%"
          }
        }>
          <button
            onClick={()=>reset()}
          >
            초기화
          </button>
        </div>
        <div style = {{
          display:"flex",
          }
        }>
          <div style = {{
            color: "#FFFFFF", 
            width: 640,
            height: 240,
            }
          }>
            Sign: {Caption}
          </div>
          <div style={{
            color: "#FFFFFF", 
            width: 640,
            height: 240,

          }}>
            Sound: {transcript}
          </div>
        </div>
      </div>

    </div>
  );
}


export default RealTimeObjectDetection;
