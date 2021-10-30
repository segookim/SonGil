// Import dependencies
import React from "react";
import '../css/bootstrap.min.css';
// import '../bootstrap.min.css';
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
      width:"48%",
      fontSize: "3vw",
    }}>
      음성 인식
      <div style={{
        fontSize: "80%",
      }}>
        <MicIcon style={{
          // transform:"scale(1.5)",
          marginRight: "2%"
        }}/>
        {listening ? 'on' : 'off'}
      </div>
      <Button variant="outlined" color="inherit" onClick={startHandle} style={{
        // transform:"scale(1.5)",
        marginRight: "2%",
        marginLeft: "2%",
      }}><PlayCircleFilledWhiteIcon/></Button>
      <Button variant="outlined" color="inherit" onClick={stopHandle}style={{
        // transform:"scale(1.5)",
        marginLeft: "5%",
      }}><StopIcon/></Button>
    </div>
  );
}


export default SoundToText;
