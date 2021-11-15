import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2%",
    paddingBottom: "1%",
    left: 0,
    right: 0,
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container>
        <div className={classes.footer}>
          &copy; 2021 Songil All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
