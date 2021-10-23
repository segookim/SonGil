// Import dependencies
import React from "react";
import '../bootstrap.min.css';
// import "./App.css";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import Button from '@material-ui/core/Button';
import MicIcon from '@material-ui/icons/Mic';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import StopIcon from '@material-ui/icons/Stop';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */


function SoundToText({startHandle, stopHandle,resetTranscript,transcript,listening, setText}) {
  //SoundToText
  return (
    <div style={{
      color: "white",
      marginTop:"5%"
    }}>
      <h2>음성번역</h2>
      <p>
        <MicIcon/>
        {listening ? 'on' : 'off'}
      </p>
      <Button variant="outlined" color="inherit" onClick={startHandle}><PlayCircleFilledWhiteIcon/></Button>
      <Button style={{marginLeft: "1%"}} variant="outlined" color="inherit" onClick={stopHandle}><StopIcon/></Button>
      <Button style={{marginLeft: "1%"}} variant="outlined" color="inherit" onClick={resetTranscript}><RotateLeftIcon/></Button>
    </div>
  );
}


export default SoundToText;
