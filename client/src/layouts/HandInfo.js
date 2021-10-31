import React from "react";
// import { Collapse } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import Tensorflowjsimg from '../images/Tensorflowjsimg.jpg'

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
    // const images = [{"you": '../images/너.jpg'}]

    const handInfos = [
      {image:"multiply", shape:"두 주먹의 1지를 펴서 ‘X’자로 맞댄다.", meaning:"곱하기"},
      {image:"ear", shape:"오른 주먹의 1·5지로 오른쪽 귀를 잡는다.", meaning:"귀"},
      {image:"division", shape:"왼 주먹의 1지를 펴서 끝이 오른쪽으로 향하게 하고, 오른 주먹의 1·5지를 펴서 구부려 왼 주먹의 1지에 ‘÷’ 모양이 되게 끼운다.", meaning:"나누기"},
      {image:"you", shape:"오른 주먹의 1지를 펴서 끝이 밖으로 향하게 하여 약간 내민다.", meaning:"너"},
      {image:"eye", shape:"오른 주먹의 1지를 펴서 끝으로 오른쪽 눈을 가리킨다.", meaning:"눈"},
      {image:"plus", shape:"두 주먹의 1지를 펴서 ‘+’자로 맞댄다.", meaning:"더하기"},
      {image:"money", shape:"오른손의 1·5지 끝을 맞대어 동그라미를 만들어 좌우로 가볍게 두 번.", meaning:"돈"},
      {image:"head", shape:"오른 주먹의 1지를 펴서 끝으로 머리 위를 가리킨다.", meaning:"머리"},
      {image:"no", shape:"두 주먹의 1·5지를 펴서 끝이 마주 보게 하였다가 손목을 양옆으로 돌린다.", meaning:"아니오"},
      {image:"sick", shape:"손바닥이 위로 향하게 약간 오므린 오른손을 좌우로 흔든다.", meaning:"아프다"},
      {image:"medicine", shape:"른손의 2지로, 손바닥이 위로 향하게 편 왼 손바닥을 전후로 두 번 문지른다.", meaning:"약"},
      {image:"connect", shape:"자연스럽게 편 두 손 각각 1·5지 끝을 맞대어 동그라미를 만들어 서로 끼고 전후로 움직인다.", meaning:"연결하다"},
      {image:"yes", shape:"오른 주먹의 1·2·4지를 펴서 등이 밖으로 향하게 벌려 1·2지 끝을 오른쪽 눈 옆에 댄다.", meaning:"예"},
      {image:"mouth", shape:"오른 주먹의 1지를 펴서 입 주위를 한 바퀴 돌린다.", meaning:"입"},
      {image:"hand", shape:"오른 손바닥을 왼 손등에 댄다.", meaning:"손"},
      {image:"one", shape:"오른 주먹의 1지를 펴서 바닥이 밖으로 향하게 세운다.", meaning:"숫자 1"},
      {image:"two", shape:"오른 주먹의 1·2지를 펴서 벌려 바닥이 밖으로 향하게 세운다.", meaning:"숫자 2"},
      {image:"three", shape:"오른 주먹의 1·2·3지를 펴서 바닥이 밖으로 향하게 세운다.", meaning:"숫자 3"},
      {image:"four", shape:"5지를 접고 1·2·3·4지를 벌려 바닥이 밖으로 향하게 세운다.", meaning:"숫자 4"},
      {image:"five", shape:"손등이 안으로 향하게 쥔 오른 주먹의 5지를 펴서 눕힌다.", meaning:"숫자 5"},
      {image:"six", shape:"오른 주먹의 1·5지를 펴서 등이 밖으로 향하게 모로 세운다.", meaning:"숫자 6"},
      {image:"seven", shape:"오른 주먹의 1·2·5지를 펴서 벌려 등이 밖으로 향하게 모로 세운다.", meaning:"숫자 7"},
      {image:"eight", shape:"4지만 접고 나머지 손가락을 펴서 벌린 오른손을 등이 밖으로 끝이 왼쪽으로 향하게 한다.", meaning:"숫자 8"},
      {image:"nine", shape:"오른손을 펴서 손바닥이 안으로 향하게 비스듬히 세운다.", meaning:"숫자 9"},
      {image:"ten", shape:"오른손의 1·5지 끝을 맞대어 동그라미를 만들어 손바닥이 밖으로 향하게 세운다.", meaning:"숫자 10"},
      {image:"meal", shape:"오른손을 펴서, 손바닥이 위로 향하게 하여 두 번 입으로 올린다.", meaning:"식사"},
      {image:"house", shape:"두 손의 손끝을 맞대어 좌우로 비스듬히 세운다.", meaning:"집"},
      {image:"book", shape:"두 손을 펴서 손끝이 밖으로 향하게 하여 맞댔다가 손목을 양옆으로 돌려 편다.", meaning:"책"},
      {image:"nose", shape:"오른 주먹의 1지를 펴서 끝 바닥을 코에 댄다.", meaning:"코"},
      {image:"turnon", shape:"손끝이 밖으로 향하게 모아 댄 두 손의 손끝을 1·2·3·4지 끝이 약간 위로 향하게 편다", meaning:"켜다"},
    ]

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
