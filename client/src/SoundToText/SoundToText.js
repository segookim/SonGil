// export default About
import React, { Component } from 'react';
import '../bootstrap.min.css';
//import { makeStyles } from '@material-ui/core/styles';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */

const SoundToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startHandle = () => {
    SpeechRecognition.startListening({language: 'ko', continuous: true})
  };
  
  const stopHandle = () => {
    SpeechRecognition.stopListening();
  };

  return (
    // <div className="About container" style={{
    //   position: "absolute",
    //   marginTop: "10%",
    //   marginLeft: "auto",
    //   marginRight: "auto",
    //   left: 0,
    //   right: 0,
    //   textAlign: "center",
    // }}>
    <div style={{
      marginTop:"10%"
    }}>
      <h2>Sound To Text</h2>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className="btn-success" onClick={startHandle}>Start</button>
      <button className="btn-danger" onClick={stopHandle}>Stop</button>
      <button className="btn-light" onClick={resetTranscript}>Reset</button>
      <p style={{
        marginTop: "5%"
      }}>번역: {transcript} </p>
    </div>
  );
}

export default SoundToText;