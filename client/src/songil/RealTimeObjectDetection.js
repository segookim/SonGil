// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import '../bootstrap.min.css';
// import "./App.css";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import {drawRect} from "./utilities";


function RealTimeObjectDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let net;
  const model_url ='https://tensorflow-realtimemodel-hskw.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json'
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    if (('indexedDB' in window)) {
      try {
        net = await tf.loadGraphModel('indexeddb://idb');
      }
      // If error here, assume that the object store doesn't exist and 
      // the model currently isn't saved in IndexedDB.
      catch (error) {
        console.log('Not found in IndexedDB. Loading and saving...');
        console.log(error);
        net = await tf.loadGraphModel(model_url);
        await net.save('indexeddb://idb');
      }
    }   
    else {
      console.warn('IndexedDB not supported.');
      net = await tf.loadGraphModel(model_url);
    } 
   
    console.count('detecting object');
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640, 480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()


      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  

      requestAnimationFrame(()=> {drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)})

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginTop: "10%",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginTop: "10%",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default RealTimeObjectDetection;
