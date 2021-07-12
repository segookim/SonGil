// export default About
import React, { Component } from 'react';
import '../../bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */

export default class Home extends Component {
  render() {
    return (
      <div className="About container" style={{
                    // position: "absolute",
                    marginTop: "10%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
      }}>
        <h3>About</h3>
        <p>
          안녕하세요
          react 와 tfjs를 이용한 수어 튜터웹앱입니다.
        </p>
      </div>
    );
  }
}
