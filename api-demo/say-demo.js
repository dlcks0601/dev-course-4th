const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});
// 콜백함수

// API + GET + "http://localhost:1234/test"
// "TEST SUCCESS"

app.get('/hello', function (req, res) {
  res.json({
    say: '안녕하세요',
  });
});

app.get('/by', function (req, res) {
  res.json({
    say: '안녕히 가세요',
  });
});

app.get('/bicetomeetyou', function (req, res) {
  res.json({
    say: '만나서 반갑습니다',
  });
});

app.listen(1234);

let nodejsBook = {
  title: 'Node.js를 공부해보자',
  price: 20000,
  description: '이 책 좋음',
};

app.get('/products/1', function (req, res) {
  res.json(nodejsBook);
});
