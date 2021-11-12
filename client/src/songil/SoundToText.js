// Import dependencies
import React from "react";
import { useState } from "react";
import '../css/bootstrap.min.css';

import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "7vw",
  },
}));

function SoundToText({startHandle, stopHandle,resetTranscript,transcript,listening, setText}) {
  const classes = useStyles();
  const [icon, setIcon] = useState(<PlayArrowIcon className={classes.icon}/>);
  const [buttonVariant, setButtonVariant] = useState('outlined');
  // const [buttonColor, setButtonColor] = useState('white');

  const onClick = () => {
    if ( listening ){
      stopHandle();
      setIcon(<PlayArrowIcon className={classes.icon}/>);
      setButtonVariant('outlined');
    } else {
      startHandle();
      setIcon(<StopIcon className={classes.icon} style={{color: "#272B30"}}/>);
      setButtonVariant('contained');
    }
  }

  return (
    <div style={{
      marginTop: "1%",
      color: "white",
      width:"48%",
      fontSize: "3vw",
    }}>
      음성 인식
      <div style={{
        marginTop: "15%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Button variant={buttonVariant} color="inherit" onClick={onClick} style={{
          borderRadius:"100%",
          width: "15vw",
          height: "15vw",
        }}>
          {icon}
        </Button>
      </div>
    </div>
  );
}


export default SoundToText;
