// // Import dependencies

import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';


import SignToText from './SignToText'
import SoundToText from './SoundToText'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#444444"
  },
}));


function Home() {
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

      <>
       <div style = {{
          // width: 3000,
          marginTop: "20%",
          display: "flex",
          justifyContent: "center"
          }
        }>

          <div style = {{
            marginRight: "20%"
          }
          }>
            <SignToText setCaption  = {setCaption}/>

            <div style = {{
                marginTop: "20%",
                color: "#FFFFFF",
                fontSize : "500%"
                }
              }>
                수어: {Caption}
            </div>

          </div>
        


          <div style = {{
            width: 1300,
            }
          }>
            <div style = {{
              marginTop: "12%",
              marginLeft: "60%"
            }
            }>
            <SoundToText startHandle={startHandle} stopHandle={stopHandle} resetTranscript={resetTranscript} transcript={transcript} listening={listening} setTextsetText = {setText} />
            </div>

            <div style = {{
                marginTop: "48%",
                fontSize: "200%"
                }
              }>
              <button
              onClick={()=>reset()}
              >
              전체 초기화
              </button>
            </div>

            <div style={{
                marginTop: "7%",
                color: "#FFFFFF", 
                width: 1300,
                height: 240,
                fontSize: "500%"
              }}>
                음성: {transcript}
            </div>

          </div>

        </div>
    </>
  );
}


export default Home;
