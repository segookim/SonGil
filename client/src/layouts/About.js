// export default About
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */

import kiwoongkim from '../images/kiwoongkim.jpg'
import segookim from '../images/segookim.jpg'
import haesungyang from '../images/haesungyang.jpg'
import Reactimg from '../images/Reactimg.jpg'
import Tensorflowimg from '../images/Tensorflowimg.jpg'
import Ibmcloudimg from '../images/Ibmcloudimg.jpg'
import Tensorflowjsimg from '../images/Tensorflowjsimg.jpg'
import { borderRadius } from '@mui/system';

const useStyles = makeStyles(() => ({
  root: {
    color: "white",
    textAlign: "center",
    fontSize: "1.8vw",
  },

  Head: {
    fontSize: "2vw"
  },

  Content: {
    backgroundColor: "white",
    position: "2",
    marginTop: "1%",
    padding: "3%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    width: "80vw",
    textAlign: "center",
    color: "black",
    marginBottom: "5%",
    borderRadius: "4px"
  },

  sort: {
    marginTop: "3%",
    textAlign: "left",
  },

  Person:{
    marginTop: "2vw",
    marginBottom: "2vw",
  },

  PersonImg:{
    // marginLeft: "4vw",
    float: "left",
    width: "15vw",
    height: "20vw",
    borderRadius: "4px"
  },

  Description:{
    marginLeft: "17vw",
    // marginRight: "4vw",
    padding: "2vw",
    backgroundColor: "black",
    color: "white",
    height: "20vw",
    borderRadius: "4px"
  },

  TechImg: {
    // width : 200,
    height: "4vw",
    margin: "2vw", 
  }
}));


const About = () => {

    const classes = useStyles();
    
    return (
      <div className={classes.root}>

        <div className={classes.Head}>개발 동기</div>
        <div className={classes.Content}>
            <div className={classes.sort}>
              <p>안녕하세요 저희는 '더 나은 세상'이라는 사회적 가치 실현에 중점을 두고있는 개발자들입니다.</p>
              <p>호떡장사를 하시는 농아인분이 손님과의 의사소통에 불편함을 느끼시는 것을 보고, 해당 문제점을 해결하고자 이번 웹앱프로젝트를 준비하게 되었습니다.</p>
              <p>각광받고 있는 TensorFlow AI기술을 이용하여 농아인과 보다 더 가까운 세상을 그려보고자 합니다.</p>
            </div>
        </div>

        <div className={classes.Head}>개발자 소개</div>
        <div className={classes.Content}>
          <div className={classes.Person}>
            <img className={classes.PersonImg} src={kiwoongkim} />
            <div className={classes.Description}>
              <span className={classes.sort}>
                <p>- Name : 김기웅</p>
                <p>- Email : rldnd2637@gmail.com</p>
                <p>- 역할 : React, Serviceworker/PWA, Tensorflow 학습</p>
              </span>
            </div>
          </div>

          <div className={classes.Person}>
            <img className={classes.PersonImg} src={segookim} />
            <div className={classes.Description}>
              <span className={classes.sort}>
                <p>- Name : 김세구</p>
                <p>- Email : kuialvre1@gmail.com</p>
                <p>- 역할 : React, FrontEnd, Tensorflow 학습</p>
              </span>
            </div>
          </div>

          <div className={classes.Person}>
            <img className={classes.PersonImg} src={haesungyang} />
            <div className={classes.Description}>
              <span className={classes.sort}>
                <p>- Name : 양해성</p>
                <p>- Email : yanghs632@gmail.com</p>
                <p>- 역할 : React, STT, Tensorflow 학습</p>
              </span>
            </div>
          </div>
        </div>

        <div className={classes.Head}>사용 기술</div>
        <div className={classes.Content}>
          <img className={classes.TechImg} src={Reactimg} />
          <img className={classes.TechImg} src={Tensorflowimg} />
          <img className={classes.TechImg} src={Tensorflowjsimg} />
          <img className={classes.TechImg} src={Ibmcloudimg} />
        </div>

      </div>
    );
}

export default About