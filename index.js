// express 모듈 불러오기
const express = require('express');

// express 객체 생성
const app = express();

// path 모듈 불러오기
const path = require('path');

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);

// 미들웨어 함수를 특정 경로에 등록
app.use('/api/data', function(req, res) {
  res.json({ greeting: 'Hello World' });
});

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

console.log(`server running at http ${port}`);