# Fetch API

## 비동기 처리
- 들어온 요청들을 순차적으로 실행시킨다면? <br>
    앞에 들어온 작업이 시간이 오래 걸리는 작업일 시 뒤에 있는 작업들이 밀리게 된다.
- 이런 작업들을 그대로 실행시키면서 뒤에 있는 코드들을 실행시키는 것이 바로 비동기 처리이다.
- Promise 객체를 사용한다.
    - 대기, 이행, 거부의 세 가지 상태를 가진다.

## 비동기 호출 - keyword
- 두 가지 패턴이 존재한다.
- async, await 키워드를 활용
    ```
    async function asyncFunction() {
        await [Promise 객체]
    }
    ```
- [Promise객체]<br>
                .then(콜백함수)<br>
                .then(콜백함수)<br>
                .catch(콜백함수)<br>
                
## Fetch API
- Fetch API는 네트워크 통신을 위해서 제공되는 API이다.
- Promise 객체를 반환한다.
- Request, Response라는 두 개의 객체를 사용한다. 

## Promise 상태
- 대기, 이행, 거부의 세 가지 상태를 가진다.
1. 
    ```
    function promiseTest1(timer){
        // Promise 객체를 new 키워드를 통해 만들어준다.
        let promiseObj = new Promise((resolve, reject)) => {
            setTimeout(() => {
                //resolve 함수를 통해 메시지를 반환해준다.
                resolve('Timer : ${timer}')
            }, timer);
        });

        // 반환된 메시지는 then 함수를 통해 익명 함수의 매개변수
        // 여기서는 value로 들어가게 되고, 
        // console.log(value)로 출력된다.
        promiseObj.then((value) => console.log(value));
    }
    ```
2. 
    ```
    function promiseTest2(timer){
        // status를 랜덤으로 만든다.
        // Math.floor() : 바닥함수 -> 소수점이하를 버린다.
        // Math.random() : 0~1 사이의 랜덤한 숫자를 반환한다.
        const status = Math.floor(Math.random() * 10) % 2;
        let promiseObj = new Promise((resolve, reject)) => {
            // 랜덤으로 뽑은 status가 1이면 resolve
            // status가 0이면 reject로 메시지를 반환한다.
            setTimeout(() => {
                if(status === 1) resolve('성공!');
                else reject('실패');
            }, timer);
        })

        promiseObj
            .then((value) => console.log(value));
            .catch((error) => console.error(error));
    }
    ```

## Fetch API
1. Fetch API로 JSON Placeholder 테스트
    ```
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
    ```
2. Fetch API로 POST 요청 날리기
    ```
    // 생성할 Post 객체
    let newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    fetch(url, {
        // HTTP 요청 메소드 사용 가능
        method: 'POST',
        // body는 직렬화해서 전송
        body: JSON.stringify(newPost),
        // Header를 추가해서 우리가 보내는 데이터에 대한 정보를 서버에 알려준다.
        header: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            console.log("response 타입: " + typeof(response));
            return response.json();
        })
        .then(json => {
            console.log("response.json() 타입: " + typeof(json));
            console.log(json)
        })
    ```