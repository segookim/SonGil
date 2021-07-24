import About from './About/About';
import Start from './Start/Start';
// import Navbar from './Navbar/Navbar';
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import green from "@material-ui/core/colors/green";
// import RealTimeObjectDetection from "../songil/RealTimeObjectDetection";


const Home = ({children}) => {
    return(
        <>
            <Start />
            <About />
        </>
    );
}

export default Home
