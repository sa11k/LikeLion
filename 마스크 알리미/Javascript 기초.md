# Javascript 기초

## Javascript 기초 문법
### 주의사항 및 자습 안내
- W3C School : https://www.w3schools.com
- MDN Document : https://developer.mozilla.org/ko/docs/web/JavaScript
- 생활코딩 WEB2 - Javascript : https://opentutorials.org/course/3085
- ofcourse : https://ofcourse.kr

1. Javascript
    - 웹페이지를 동적으로 만들 때 사용하는 언어
    - 객체 기반의 스크립트 언어
    - 할 수 있는 일이 굉장히 많다.
        - Browser API - DOM, 위치정보, audio, 화면공유 등 Browser에서 제공하는 API들
        - 2D, 3D 그래픽 작업 - NullSchool
        - 클라이언트 뿐만 아니라 서버도 JS로 가능 - Node.js
    - 스크립트 언어 + 인터프리터 방식 (파이썬과 동일)
        - 입력 후 바로 결과 확인이 가능하다.
        - 브라우저에 내장된 엔진으로 즉시 해석된다.
    - 사용법 1 : HTML 내부에서 <script> 태그 내에 사용
    - 사용법 2 : .js 파일로 만들고, <script src="파일경로">를 사용해서 불러오기
2. 변수
    - 사용가능한 데이터 타입 : Boolean, Null, Undefined, Number, String, Symbol, Object
    - var : 권장하지 않는 변수 선언 방식
        - Hoisting
        - Function scope 변수 (타 언어와 다른 점)
        - 중복 선언 가능
        - 예측하기 어려운 코드를 만들 수 있다.
    - let : block scope 변수 (타 언어와 비슷하게 동작)
    - const : 변하지 않는 데이터를 저장 (ex. 파이, 객체)
3. 실습
    - chrome console 활용하여 실습
     **변수**
     ```
     let booleanVal = true
     let numberVal = 0
     let nullVal = null
     let undefinedVal = undefined
     let stringVal = ''
     let person = {
         name : "홍길동",
         phoneNumber : "010-0000-0000",
         email : "hong@hong.com"
     }
     ```
     - 위의 코드를 입력한 후 아래의 코드를 실행하면 각각에 알맞은 값들을 출력할 수 있다.
        - booleanVal -> true
        - typeof(booleanVal) -> "boolean"
        - typeof(numberVal) -> "number"
        - typeof(nullVal) -> "object"
        - null * 2 -> 0
     **반복문**
     ```
     for (const i = 0; i < 10; i++){
         console.log(i);
     }
     ```
     - 위의 코드를 실행하면 TypeError가 발생한다. (const는 변경할 수 없으므로 에러가 발생)
    
    ```
     for (let i = 0; i < 10; i++){
         console.log(i);
     }
     ```
     - 위와 같이 let i로 변경하면 0~9이 출력되는 모습을 확인할 수 있다. (i의 값이 증가되며 변화하는 것이므로 const가 아닌 let을 사용해야함)
     
     ```
     const numInfo = { "one": "first", "two": "second", "three": "third"};
     for(const i in numInfo) {
         console.log(`기수: ${i}, 서수: ${numInfo[i]}`);
     }
     ```
     - 위와 같이 입력하면 기수와 서수가 차례대로 출력되는 모습을 볼 수 있다.

     ```
     const oddNums = [1, 3, 5, 7, 9, 11];
     for(const i of oddNums) {
         console.log(i);
     }
     ```
     - 위와 같이 for ~ of문을 이용하면 하나씩 가져와 읽을 수 있다.
    
     ```
     let i = 0;
     while (i < 10) {
         console.log(i);
         i++;
     }
     ```
     - 위와 같이 for문이 아닌 while문을 이용할 수도 있다.
     **조건문**
     ```
     let score = prompt("점수를 입력하세요.", 0);
     ```
     - prompt를 이용하여 입력받을 수 있다.

     ```
     if (score >= 90) {
         console.log("A+");
     } else if (score >= 80) {
         console.log("B+");
     } else {
         console.log("C+");
     }
     ```
     - 위와 같은 코드로 조건에 맞는 것을 출력할 수 있다.
4. DOM 다루기
    - DOM : Document Object Model
    - 웹페이지에 접근할 수 있게 해주는 일종의 인터페이스
    - Javascript와는 별개
    - Javascript에 DOM을 조작할 수 있는 API가 존재
    **Node 선택하기**
    - ID로 DOM 객체 선택
        ```
        let idObj = document.getElementById("name");
        ```
    - Class 로 DOM 객체 선택
        ```
        let classObj = document.getElementByClassName("");
        ```
    - CSS 선택자로 DOM 객체 선택
        ```
        let selectorObj = document.querySelector("#kp-wp-tab-overview > ...");
        ```
    **속성 변경하기**
    - 사용할 수 있는 속성들 : style, innerText, innerHtml
        ```
        selectorObj.style = "color:yellow";
        selectorObj.innerText = "헬로";
        selectorObj.innerHTML = '<a href="https://www.naver.com">네이버로 가기</a>';
        ```
    - a Tag의 href 속성같은 각종 태그들의 속성들
        ```
        aTag.href = "https://www.naver.com";
        ```
    - innerText와 innerHTML의 차이<br>
        : innerText는 그 텍스트 자체를 바꾸는 것<br>
        : innerHTML은 연결된 하이퍼링크를 바꾸는 것
    **새 노드 추가하기**
    - createElement, append child
        ```
        let newNode = document.createElement("p");
        newNode.innerText = "new P tag";
        let link = document.querySelector("#rso > div:nth-child(1) > div > div.r")
        link.appendChild(newNode)
        ```
        - 위의 코드로 새 노드(p)를 추가할 수 있고 innerText로 p태그 안에 new P tag라고 입력할 수 있다. 그리고 appendChild를 이용하여 자식으로 추가할 수 있다.
5. 함수
    - 기본적인 형태
        ```
        //새로운 노드를 추가해주는 함수
        function ver1_appendNewNode(target, tag="p", text="기본값"){
            let newTag = document.createElement(tag);
            newTag.innerText = text;
            target.appendChild(newTag);
        }

        appendNewNode(target);
        appendNewNode(target, "a");
        appendNewNode(target, "a", "A태그!");
        ```
    - 익명 함수
        ```
        let ver2_appendNewNode = function(target, tag="p", text="기본값"){
            let newTag = document.createElement(tag);
            newTag.innerText = text;
            target.appendChild(newTag);
        }
        ```
    - 화살표 함수
        ```
        // 익명 함수 2 : 화살표 함수 형태
        let ver3_appendNewNode = (target, tag="p", text="기본값") => {
            let newTag = document.createElement(tag);
            newTag.innerText = text;
            target.appendChild(newTag);
        } 
        ```