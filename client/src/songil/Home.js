// // Import dependencies

import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import SignToText from './SignToText'
import SoundToText from './SoundToText'
import DynamicSignToText from './DynamicSignToText'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eeeeee",

    "&.MuiButton-root": {
      backgroundColor: "#90caf9"
    },
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
             display:"flex",
             height: "20%",
          }
          }>
            <div style={{
              color: "white",
              width:"48%",
              fontSize: "2vw",
            }}>
              수어 인식
              <SignToText setCaption  = {setCaption}/>
              {/* <DynamicSignToText/> */}
            </div>

            <SoundToText 
              startHandle={startHandle} stopHandle={stopHandle} resetTranscript={resetTranscript} transcript={transcript} listening={listening} setTextsetText = {setText} />

          </div>

          <div style = {{
            marginTop:"1%",
            display:"flex",
            width: "100%",
            }
          }>
            

            <div
              style = {{
                width: "48%",
                color: "black",
                fontSize: "2vw",
                }
              }>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color:"white"
                }}>
                  수어 인식 결과
                    <Button variant="contained" color="primary" onClick={()=>reset()}
                     style = {{
                      fontSize: "1vw",
                    }}
                    >
                      결과 초기화
                    </Button>
                </div>

                <div style={{
                  borderRadius: "4px",
                  marginTop: "1%",
                  padding:"1%",
                  fontSize: "2vw",
                  overflowY:"scroll",
                  backgroundColor: "white",
                  height: "12vw"
                }}>
                  {Caption}
                </div>
            </div>
           
            <div style={{
                marginLeft: "4%",
                width: "48%",
                color: "black", 
                fontSize: "2vw",
              }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white"
                }}>
                  음성 인식 결과
                  <Button variant="contained" color="primary" onClick={()=>resetTranscript()}
                    style = {{
                      fontSize: "1vw",
                    }}
                    >
                    결과 초기화
                    </Button>
                </div>
                <div style={{
                  borderRadius: "4px",
                  marginTop: "1%",
                  padding:"1%",
                  fontSize: "2vw",
                  overflowY:"scroll",
                  backgroundColor: "white",
                  height: "12vw"
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
