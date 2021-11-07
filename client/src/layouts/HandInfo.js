import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


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

  //url 설정
  let url ='http://localhost:5000/api/hand'
  if(process.env.NODE_ENV === 'production'){
    url ='https://songil-project.herokuapp.com/api/hand'
  } 

  const useStyles = makeStyles(() => ({
    root:{
        color: 'white',
        textAlign: 'center',
        fontSize: "3vw"
    },
  }),[]);  

  const config = {
    headers: {
        "Content-Type": "application/json",
    },
  };
  
  useEffect(()=>{
    
    const hands = axios.get(url, config)
    .then((Response)=>{
      console.log(Response.data)
      setHand(Response.data)
      return Response.data
    })
    .catch((Error)=>{console.log(Error)})
  },[]);

  const handInfos = hand;

  const [query, setQuery] = useState("")

  const handList = 
    handInfos.filter(handInfo => {
      if (query === '') {
        return handInfo;
      } 
      else if (handInfo.meaning.toLowerCase().includes(query.toLowerCase())) {
        return handInfo;
      }
    }).map((handInfo) => (
       <div style={{width:"70%",marginLeft: "auto", marginRight:"auto"}}>
        <Collapse title={handInfo.meaning}>
          <div style={{background: "white", marignTop: "-1%", padding: "1%", borderRadius: "4px",}}>
            <div style={{color: "black", fontSize: "1.5vw"}}>{handInfo.shape}</div>
            <img src={`./hand/${handInfo.image}.jpg`} style={{height: "20vw"}}/>
          </div>
        </Collapse>
      </div>
  ));

    const classes = useStyles();

    return(
        <div className={classes.root}>
            지원 수어 살펴보기
            <div style={{width: "90%", marginTop: "3%", marginLeft: "5%",}}>
              <input placeholder="검색" onChange={event => setQuery(event.target.value)} /> 
              {handList}
            </div>
        </div>
    );
}

export default HandInfo