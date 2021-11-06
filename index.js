import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import handinfoRoutes from './hand.js'

dotenv.config();

// express 모듈 불러오기
const app = express();

app.use(cors({origin: true, Credential: true})) //헤더 모두 허용

app.use(express.json()); // express 내장 body-parser 사용(json형태 해석) 

// path 모듈 불러오기
//const path = require('path');

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log(`Server started on Port ${port}`);
})

app.use('/api/hand',handinfoRoutes);

mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
    })
    .then(()=> console.log("MongoDB connecting Success!!"))
    .catch((e)=> console.log(e));

/*
// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
*/