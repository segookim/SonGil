// Import dependencies
import React, { useRef,useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import '../css/bootstrap.min.css';

import { getText } from "./utilities";

function SignToText({setCaption}) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let CurrentValue= ' ';
  let BeforeValue= '';

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
    }, 500);
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
      // canvasRef.current.width = videoWidth;
      // canvasRef.current.height = videoHeight;

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
      try{
        const ctx = canvasRef.current.getContext("2d");
        
        CurrentValue = getText(classes[0], scores[0], 0.8)

        if (CurrentValue !== BeforeValue){
            setCaption(Caption => [...Caption, CurrentValue]);
            BeforeValue = CurrentValue;
            //requestAnimationFrame(()=> {drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)})    
        }
        
      }catch(err){
        console.log(err)
      }
      
        tf.dispose(img)
        tf.dispose(resized)
        tf.dispose(casted)
        tf.dispose(expanded)
        tf.dispose(obj)  

    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div
      style={{
        marginTop: "1%"
        // width: 640,
        // height: 480,
        // height: 540,
      }}
    >
        <Webcam
        ref={webcamRef}
        muted={true}
        forceScreenshotSourceSize="true"
        style={{
          // position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          // textAlign: "center",
          zindex: 9,
          width: "100%",
          height: "30vw"
          // width: 720,
          // height: 540,
        }}
        />
    </div>
  );
}


export default SignToText;
