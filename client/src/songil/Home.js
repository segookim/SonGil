// // Import dependencies

import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
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
             display:"flex",
             height: "20%",
          }
          }>
            <div style={{
              color: "white",
              width:"48%",
              fontSize: "3vw",
            }}>
              수어 인식
              <SignToText setCaption  = {setCaption}/>
            </div>

            <div
              style = {{
                marginLeft: "4%",
                width: "48%",
                color: "black",
                fontSize : "3vw",
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
                      fontSize: "70%",
                    }}
                    >
                      결과 초기화
                    </Button>
                </div>

                <div style={{
                  marginTop: "1%",
                  padding:"1%",
                  // height:"468px",
                  height: "30vw",
                  overflowY:"scroll",
                  fontSize: "80%",
                  backgroundColor: "white",
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
                fontSize: "3vw",
                height: "270px"
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
                      fontSize: "70%",
                    }}
                    >
                    결과 초기화
                    </Button>
                </div>
                <div style={{
                  borderRadius: "4px",
                  marginTop: "1%",
                  padding:"1%",
                  height:"198px",
                  fontSize: "80%",
                  overflowY:"scroll",
                  backgroundColor: "white",
                  height: "30vw"
                  
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
