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

const useStyles = makeStyles(() => ({
  root: {
    color: "black"
  },
  Motivation: {
    backgroundColor: "white",
    position: "1",
    padding: "2%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    width: "90vw",
    // width: 1200,
    // height: 200,
  },
  introduce: {
    backgroundColor: "white",
    position: "2",
    marginTop: "5%",
    padding: "2%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    width: "90vw",
    // width: 1200,
    // height: 800,
  },
  technique: {
    backgroundColor: "white",
    position: "3",
    marginTop: "5%",
    padding: "2%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    width: "90vw",
    // width: 1200,
  },
  sort: {
    marginTop: "3%",
    // margin: 20,
    // marginLeft: 20,
    textAlign: "left",
  },
  kiwoongkim:{
    marginTop: 30
  },
  kiwoongkimimg:{
    marginLeft: 30,
    float: "left",
    width: 150,
    height: 200
  },
  segookim:{
    marginTop: 30
  },
  segookimimg:{
    marginLeft: 30,
    float: "left",
    width: 150,
    height: 200
  },
  haesungyang:{
    marginTop: 30
  },
  haesungyangimg:{
    marginLeft: 30,
    float: "left",
    width: 150,
    height: 200
  },
  content:{
    marginLeft: 210,
    marginRight: 30,
    padding: 20,
    backgroundColor: "black",
    color: "white",
    height: 200,
  },
  techimg: {
    // width : 200,
    height: 50,
    marginTop: 50, 
    marginLeft: 50,
    marginRight: 50
  }
}));


const About = () => {

    const classes = useStyles();
    
    return (
      <div className={classes.root}>

        <div className={classes.Motivation}>
          <h3>개발 동기</h3>
            <div className={classes.sort}>
              <p>안녕하세요 저희는 '더 나은 세상'이라는 사회적 가치 실현에 중점을 두고있는 개발자들입니다.</p>
              <p>호떡장사를 하시는 농아인분이 손님과의 의사소통에 불편함을 느끼시는 것을 보고, 해당 문제점을 해결하고자 이번 웹앱프로젝트를 준비하게 되었습니다.</p>
              <p>각광받고 있는 TensorFlow AI기술을 이용하여 농아인과 보다 더 가까운 세상을 그려보고자 합니다.</p>
            </div>
          
        </div>

        <div className={classes.introduce}>
          <h3>개발자 소개</h3>

          <div className={classes.kiwoongkim}>
            <img className={classes.kiwoongkimimg} src={kiwoongkim} />
            <div className={classes.content}>
              <span className={classes.sort}>
                <p>- Name : 김기웅</p>
                <p>- Email : rldnd2637@gmail.com</p>
                <p>- 역할 : React, Serviceworker/PWA, Tensorflow 학습</p>
              </span>
            </div>
          </div>

          <div className={classes.segookim}>
            <img className={classes.segookimimg} src={segookim} />
            <div className={classes.content}>
              <span className={classes.sort}>
                <p>- Name : 김세구</p>
                <p>- Email : kuialvre1@gmail.com</p>
                <p>- 역할 : React, FrontEnd, Tensorflow 학습</p>
              </span>
            </div>
          </div>

          <div className={classes.haesungyang}>
            <img className={classes.haesungyangimg} src={haesungyang} />
            <div className={classes.content}>
              <span className={classes.sort}>
                <p>- Name : 양해성</p>
                <p>- Email : yanghs632@gmail.com</p>
                <p>- 역할 : React, STT, Tensorflow 학습</p>
              </span>
            </div>
          </div>
        </div>

        <div className={classes.technique}>
          <h3>사용 기술</h3>
          <img className={classes.techimg} src={Reactimg} />
          <img className={classes.techimg} src={Tensorflowimg} />
          <img className={classes.techimg} src={Tensorflowjsimg} />
          <img className={classes.techimg} src={Ibmcloudimg} />
        </div>

      </div>
    );
}

export default About