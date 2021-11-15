import React from "react";
import "./fonts/font.css";

//material-ui
import { Container } from "@material-ui/core";

import { withRouter } from "react-router-dom";

import { Navbar } from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Routes from "./Routes";

const App = () => {
  return (
    <div style={{ fontFamily: "NanumBarunGothic" }}>
      <Navbar />
      <Container maxWidth="false" style={{ padding: "1%", paddingTop: "2%" }}>
        <Routes />
      </Container>
      <Footer />
    </div>
  );
};

App.propTypes = {};

export default withRouter(App);
