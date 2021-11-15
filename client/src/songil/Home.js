import React, { useEffect, useState, useRef, Component } from "react";
import SignToText from "./SignToText";
import SoundToText from "./SoundToText";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Button from "@material-ui/core/Button";
function Home() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef();

  //SoundToText
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const startHandle = () => {
    resetTranscript();
    SpeechRecognition.startListening({ language: "ko", continuous: true });
  };
  const stopHandle = () => {
    SpeechRecognition.stopListening();

    setMessages((messages) => [
      ...messages,
      { body: "음성:" + transcript, isSign: false },
    ]);
    resetTranscript();
  };

  function reset() {
    setMessages([]);
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "48vw", paddingRight: "1vw" }}>
          <div
              style={{
                textAlign: "center",
                color: "white",
                lineHeight: "5vh",
                fontSize: "2vw",
              }}
            >
              수어 및 음성인식
          </div>
          <div>
            <SignToText setMessages={setMessages} />
          </div>
          <SoundToText
            startHandle={startHandle}
            stopHandle={stopHandle}
            listening={listening}
            setMessages={setMessages}
          />
        </div>
        <div
          style={{
            color: "black",
            width: "45vw",
            fontSize: "2vw",
          }}
        >
          <div
          >
            <div
              style={{
                textAlign: "center",
                color: "white",
                lineHeight: "5vh",
                fontSize: "2vw",
              }}
            >
              인식결과
            </div>
            <div
              style={{
                overflowY: "scroll",
                height: "55vh",
                backgroundColor: "white",
                borderRadius: "4px"
            }}
            >
              <div style={{padding: "1%"}}>
                {messages.map((message, i) =>
                  message.isSign ? (
                    <div key={i} style={{ textAlign: "left" }}>
                      {message.body}
                    </div>
                  ) : (
                    <div key={i} style={{ textAlign: "right", color: "blue" }}>
                      {message.body}
                    </div>
                  )
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => reset()}
            style={{
              fontSize: "1.8vw",
              float: "right",
              marginTop: "1%",
            }}
          >
            결과 초기화
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
