// Import dependencies
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "7vw",
  },
}));

function SoundToText({ startHandle, stopHandle, listening }) {
  const classes = useStyles();
  const [icon, setIcon] = useState(<PlayArrowIcon className={classes.icon} />);
  const [buttonVariant, setButtonVariant] = useState("outlined");

  const onClick = () => {
    if (listening) {
      stopHandle();
      setIcon(<PlayArrowIcon className={classes.icon} />);
      setButtonVariant("outlined");
    } else {
      startHandle();
      setIcon(
        <StopIcon className={classes.icon} style={{ color: "#272B30" }} />
      );
      setButtonVariant("contained");
    }
  };

  return (
    <div
      style={{
        marginLeft: "25%",
        color: "white",
        width: "48%",
        fontSize: "2vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          variant={buttonVariant}
          color="inherit"
          onClick={onClick}
          style={{
            borderRadius: "100%",
            width: "12vw",
            height: "12vw",
          }}
        >
          {icon}
        </Button>
        <div
          style={{
            fontSize: "1.8vw",
            marginTop: "2%",
          }}
        >
          {listening ? "음성 인식 중입니다." : "음성 인식이 중지되었습니다."}
        </div>
      </div>
    </div>
  );
}

export default SoundToText;
