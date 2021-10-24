// // Import dependencies

import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';


import SignToText from './SignToText'
import SoundToText from './SoundToText'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    } = useSpeechRecognition();
  
    const startHandle = () => {
      SpeechRecognition.startListening({language: 'ko', continuous: true});
    };
    
    const stopHandle = async () => {
      SpeechRecognition.stopListening();
    };

  function reset() {
    setCaption(['']);
    resetTranscript();
  }


  return (

      <>
       <div style = {{
          }
        }>

          <div style = {{
             display:"flex"
          }
          }>
            <SignToText setCaption  = {setCaption}/>

            <div
              style = {{
                marginLeft: "4%",
                width: "48%",
                color: "black",
                fontSize : "300%",
                backgroundColor: 'white',
                height:"540px"
                }
              }>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#DDDDDD"
                }}>
                  수어 인식 결과
                    <button onClick={()=>reset()}
                     style = {{
                      fontSize: "70%",
                      margin: "1%"
                    }}
                    >
                    결과 초기화
                    </button>
                </div>

                <div style={{
                  padding:"1%",
                  height:"468px",
                  overflowY:"scroll",
                  fontSize: "80%"
                }}>
                  {Caption}
                </div>
            </div>
          </div>

          <div style = {{
            marginTop:"5%",
            display:"flex",
            width: "100%",
            }
          }>
            
            <SoundToText 
              startHandle={startHandle} stopHandle={stopHandle} resetTranscript={resetTranscript} transcript={transcript} listening={listening} setTextsetText = {setText} />

            <div style={{
                marginLeft: "4%",
                width: "48%",
                color: "black", 
                fontSize: "300%",
                backgroundColor: "white",
                height: "270px"
              }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#DDDDDD"
                }}>
                  음성 인식 결과
                  <button onClick={()=>resetTranscript()}
                     style = {{
                      fontSize: "70%",
                      margin: "1%"
                    }}
                    >
                    결과 초기화
                    </button>
                </div>
                <div style={{
                  padding:"1%",
                  height:"198px",
                  fontSize: "80%",
                  overflowY:"scroll",
                }}>
                  {transcript}
                </div>
            </div>

          </div>

        </div>
    </>
  );
}


export default Home;
