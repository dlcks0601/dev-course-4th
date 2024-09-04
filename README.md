# postman

---

> postman 테스트
> ![alt text](https://velog.velcdn.com/images/leechan/post/ac560c37-32f4-49ed-b862-ed235c489f68/image.png)

> req, res 테스트

```
app.use(express.json())
```

![alt text](https://velog.velcdn.com/images/leechan/post/16cabf90-b935-4e7e-af56-368947756922/image.png)

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
