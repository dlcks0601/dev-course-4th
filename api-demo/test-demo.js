const express = require('express');
const app = express();

app.listen(1234);

// 콜백함수

app.get('/test', function (req, res) {
  res.send('Test');
});

// API + GET + "http://localhost:1234/test"
// "TEST SUCCESS"

app.get('/test/1', function (req, res) {
  res.send('One!!');
});
