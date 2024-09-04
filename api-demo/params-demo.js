const express = require('express');
const app = express();

app.listen(1234);

app.get('/products/:n', function (req, res) {
  // : => 어? 나한테 URL로 매개변수를 전달해줄 건 가보다
  // req.para
  // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
  // console.log(req.params);
  // console.log(req.params.n);

  let number = parseInt(req.params.n) - 10;
  console.log(number);

  res.json({
    num: number,
  });
});

// 채널 주소 : https://www.youtube.com/@15ya.fullmoon
// 채널 주소 : https://www.youtube.com/@ChimChakMan_Official

// app.get('/:nickname', function (req, res) {
//   res.json({
//     channel: req.params.nickname,
//   });
// });

//영상 클릭 주소 : https://www.youtube.com/watch?v=BmC1cmItiGs
// 영상 타임 라인 : https://www.youtube.com/watch?v=iJQO8E6dohM&t=411s

app.get('/watch', function (req, res) {
  const q = req.query;
  console.log(q.v);
  console.log(q.t);

  //JS객체(JSON)의 비구조화
  const { v, t } = req.query;
  console.log(v);
  console.log(t);

  res.json({
    video: v,
    timeline: t,
  });
});
