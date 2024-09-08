# postman

---

> postman 테스트

![스크린샷 2024-09-04 오후 11 30 40](https://github.com/user-attachments/assets/553575ba-4f17-4b0c-974c-2d950e4de7d2)

> req, res 테스트

```
app.use(express.json())
```

![스크린샷 2024-09-04 오후 11 30 58](https://github.com/user-attachments/assets/3a73b8cb-d3d9-4dea-8a30-6d501f43246f)

> 서버에서 받을 때

```
app.post('/test', function (req, res) {
  console.log(req.body.message)
  res.json(req.body)
})
```

1. GET

- 개별

  - req : parmas.id map에 저장된 key값을 전달
  - res : map에서 id로 객체를 조회해서 전달

- 전체
  - req : X
  - res : map 전체 조회

2. POST

- 등록
  - req : body <= channelTitle, sub = , videoNum = 0 신규 유튜버 정보를 전달
  - res : "channelTitle님, 유튜버 생활을 응원합니다!"

3. DELETE

- 개별

  - req : params.id
  - "channelTitle님, 아쉽지만 다음에 또 뵙겠습니다."

- 전체
  - req : X
  - res : "전체 유튜버가 삭제되었습니다."

4. PUT

- 개별
  - req : params.id, body <= channelTitle>
  - res : "(이전)channelTitle님, 채널명이 (새로운) channelTitle로 변경되었습니다."

```
app.use(express.json());
app.post('/youtuber', (req, res) => {
  console.log(req.body);
  db.set(id++, req.body);
  res.json({
    message: `${db.get(id - 1).channelTitle}님, 유튜버 생활을 응원합니다!`,
  });
});
```

![스크린샷 2024-09-04 오후 11 30 25](https://github.com/user-attachments/assets/36abeb73-06fb-4858-b0f4-db1efd97887d)

1. request값 json으로 읽음 express.json 미들웨어 불러서 사용
2. POST -> request 콘솔 확인
3. json 성공 메세지 클라이언트 보여줌

> 고도화
> id 추가할 때마다 +1

```
let id = 1
db.set(id++, req.body);
```

주의사항 let 사용시 가장 위로 올려야 함. 아니면 var로 대체가능.

> 핸들러란?

HTTP request가 날아오면 자동으로 호출되는 메소드

노드 : 콜백함수로, app.HTTPMETHOD (path, 핸들러)

cf. 스프링 : 컨트롤러

> HTTP 상태코드
> HTTP(인터넷 상에서 통신할때 사용하는 규약) 안에 작성되어서 들어가는 "상태"

- 2\*\* : 성공
  1. 조회/수정/삭제 : 200
  2. 등록 성공 : 201
- 4\*\* : 클라이언트 잘못
  1. 요청한 연산(처리)을 할 때 필요한 데이터(req)가 덜 왔을 때 : 400
  2. 찾는 페이지(리소스) 없음 (url에 맞는 api없음) : 404
- 5\*\* : 서버 잘못
  1. 서버가 죽었을 때 (서버가 크리티컬한 오류를 맞았을 때) : 500
