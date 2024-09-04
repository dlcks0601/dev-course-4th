const express = require('express');
const app = express();

app.listen(1234);

// 채널 주소 : https://www.youtube.com/@15ya.fullmoon
// 채널 주소 : https://www.youtube.com/@ChimChakMan_Official

let youtubeer1 = {
  channelTitle: '십오야',
  sub: '593만명',
  videoNum: '993개',
};

let youtubeer2 = {
  channelTitle: '침착맨',
  sub: '227만명',
  videoNum: '6.6천개',
};

let youtubeer3 = {
  channelTitle: '테오',
  sub: '54.8만명',
  videoNum: '726개',
};

app.get('/:nickname', function (req, res) {
  const { nickname } = req.params;

  if (nickname == '@15ya.fullmoon') {
    res.json(youtubeer1);
  } else if (nickname == '@ChimChakMan_Official') {
    res.json(youtubeer2);
  } else if (nickname == '@TEO_universe') {
    res.json(youtubeer3);
  } else {
    res.json({
      message: '저희가 모르는 유튜버입니다.',
    });
  }
  // 개발자가 예상하지 못한 에러 = 예외가 발생했다!
});

//영상 클릭 주소 : https://www.youtube.com/watch?v=BmC1cmItiGs
// 영상 타임 라인 : https://www.youtube.com/watch?v=iJQO8E6dohM&t=411s
