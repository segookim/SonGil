import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ex1 from '../images/1.jpg'
import ex2 from '../images/2.jpg'

const useStyles = makeStyles(() => ({
    root:{
        color: 'white'
    },
    a:{
        width: 1500,
        height: 1000,
        marginTop: 40
    },
    b:{
        width: 1500,
        height: 600,
        marginTop: 40
    },

}));


const Home = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            
            <h1>사용방법 및 기능순서</h1>
            <div>
                <img className={classes.a} src={ex1}></img>
            </div>

            <div>
                <img className={classes.b} src={ex2}></img>
            </div>

        </div>
    );
}

export default Home
