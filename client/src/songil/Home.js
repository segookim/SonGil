import React, { useEffect, useState, useRef } from "react";
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
      { body: ":" + transcript, isSign: false },
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
        <div style={{ width: "45vw" }}>
          <div
            style={{
              width: "100%",
              height: "50vh",
            }}
          >
            <SignToText setMessages={setMessages} />
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <SoundToText
              startHandle={startHandle}
              stopHandle={stopHandle}
              listening={listening}
              setMessages={setMessages}
            />
          </div>
        </div>
        <div
          style={{
            color: "black",
            width: "48%",
            fontSize: "3vw",
          }}
        >
          <div
            style={{
              width: "45vw",
              border: "1px solid #ddd",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                textAlign: "center",
                lineHeight: "5vh",
                fontSize: "2vw",
                fontWeight: "700",
                borderBottom: "1px solid #ddd",
              }}
            >
              인식결과
            </div>
            <div
              style={{
                overflow: "scroll",
                width: "45vw",
                height: "60vh",
              }}
            >
              <div>
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
              fontSize: "2vw",
              float: "right",
              marginTop: "1%",
              marginRight: "4%",
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
