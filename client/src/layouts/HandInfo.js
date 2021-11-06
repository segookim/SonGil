import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles(() => ({
    root:{
        color: 'white',
        textAlign: 'center',
        fontSize: "3vw"
    },
}));

class Collapse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false
      };
      
    }
    render() {
      const { title, children } = this.props;
      const { show } = this.state;
      return (
        <div style={{margin: "1%"}}>
          <header
            style={{
              fontSize: "1.8vw",
              borderRadius: "4px",
              padding: "0.5%",
              backgroundColor: "#8792D5",
              color: "black",
              userSelect: "none",
              cursor: "pointer",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={e => this.setState(prevState => ({ show: !prevState.show }))}
          >
            {title}
          </header>
          {show && children}
        </div>
      );
    }
  }


const HandInfo = () => {
  const [hand,setHand] = useState([]);

  const config = {
    headers: {
        "Content-Type": "application/json",
    },
  };
  
  useEffect(()=>{
    const hands = axios.get('http://localhost:5000/api/hand', config)
    .then((Response)=>{
      console.log(Response.data)
      setHand(Response.data)
      return Response.data
    })
    .catch((Error)=>{console.log(Error)})
  },[]);

  const handInfos = hand;

    const handList = handInfos.map((handInfo) => (
        // import you from {handInfo.image}
        <Collapse title={handInfo.meaning}>
          <div style={{background: "white", marignTop: "-1%", padding: "1%", borderRadius: "4px",}}>
            <div style={{color: "black", fontSize: "1.5vw"}}>{handInfo.shape}</div>
            <img src={`./hand/${handInfo.image}.jpg`} style={{height: "20vw"}}/>
          </div>
        </Collapse>
    ));

    const classes = useStyles();

    return(
        <div className={classes.root}>
            지원 수어 살펴보기
            <div style={{width: "90%", marginTop: "3%", marginLeft: "5%"}}>
                {handList}
            </div>
        </div>
    );
}

export default HandInfo
