import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../fonts/font.css";

const HandInfo = () => {
  const [handInfos, setHandInfos] = useState([]);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Active");

  //url 설정
  let url = "http://localhost:5000/api/hand";
  if (process.env.NODE_ENV === "production") {
    url = "https://songil-project.herokuapp.com/api/hand";
  }

  const useStyles = makeStyles(
    () => ({
      root: {
        color: "white",
        textAlign: "center",
        fontSize: "2vw",
      },
      AccordionSummary: {
        // borderRadius:"2px",
        // backgroundColor:"#eeeeee",
        fontFamily: "NanumBarunGothic",
        "&.Mui-expanded": {
          fontFamily: "NanumBarunGothic",
          borderRadius: "4px",
          backgroundColor: "#90caf9",
        },
      },
    }),
    []
  );

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(url, config)
      .then((Response) => {
        console.log(Response.data);
        setHandInfos(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const classes = useStyles();

  const handList = handInfos
    .filter((handInfo) => {
      if (query === "") {
        return handInfo;
      } else if (handInfo.meaning.toLowerCase().includes(query.toLowerCase())) {
        return handInfo;
      }
    })
    .map((handInfo) => (
      <Accordion
        style={{ borderRadius: "4px", margin: "1%", background: "#eeeeee" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.AccordionSummary}
        >
          <Typography
            style={{ fontSize: "1.8vw", fontFamily: "NanumBarunGothic" }}
          >
            {handInfo.meaning}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "white", borderRadius: "4px" }}>
          <Typography
            style={{
              fontSize: "1.5vw",
              marginBottom: "1%",
              fontFamily: "NanumBarunGothic",
            }}
          >
            {handInfo.shape}
          </Typography>
          <img
            src={`./hand/${handInfo.image}.jpg`}
            style={{ height: "20vw" }}
          />
        </AccordionDetails>
      </Accordion>
    ));

  return (
    <div className={classes.root}>
      지원 수어 살펴보기
      <div
        style={{
          width: "80vw",
          marginTop: "3%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <input
          placeholder="검색"
          onChange={(event) => setQuery(event.target.value)}
        />
        <div>{handList}</div>
      </div>
    </div>
  );
};

export default HandInfo;
