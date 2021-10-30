import React from "react";
// import { Collapse } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import Tensorflowjsimg from '../images/Tensorflowjsimg.jpg'

const useStyles = makeStyles(() => ({
    root:{
        color: 'white',
        textAlign: 'center'
    },
    a:{
        width: 1200,
        height: 670,
        marginTop: 40
    },
    b:{

        width: 1500,
        height: 600,
        marginTop: 40
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
              border: "1px solid black",
              backgroundColor: "grey",
              userSelect: "none",
              cursor: "pointer"
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
    // const images = [{"you": '../images/너.jpg'}]

    const handInfos = [
        {"shape": "오른 주먹의 1지를 펴서 끝이 밖으로 향하게 하여 약간 내민다.", "image": "you", "meaning": "너"},
        {"shape": "오른손의 1·5지 끝을 맞대어 동그라미를 만들어 좌우로 가볍게 두 번 흔든다.", "image": "money", "meaning": "돈"},
    ]

    const handList = handInfos.map((handInfo) => (
        // import you from {handInfo.image}
        <Collapse title={handInfo.meaning}>
            {handInfo.shape}
            <img src={`./hand/${handInfo.image}.jpg`} style={{width: "30vw"}}/>
        </Collapse>
    ));

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <h1>지원 수어 살펴보기</h1>
            <div>
                {handList}
            </div>
        </div>
    );
}

export default HandInfo
