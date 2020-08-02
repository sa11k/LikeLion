# HTTP, JSON, API 개념

## HTTP
1. HTTP 개념
    : *H*yper<br> *T*ext<br> *T*ransfer<br> *P*rotocol
    : Hyper Text - 참조를 통해 한 문서에서 관련된 다른 문서들로 넘나들며 원하는 정보를 얻을 수 있게 해주는 텍스트
    : Transfer Protocol - 인터넷을 통해서 정보를 주고받을 때 지켜야하는 규칙
    ![HTTP](https://user-images.githubusercontent.com/63536606/89115781-1d195000-d4c7-11ea-8210-e829eac3c821.PNG)
2. HTTP의 요청 메소드
    - GET : URL에 표시된 리소스를 가져오기
    - POST : body에 정보를 담아 서버에 입력
    - PUT : URL에 표시된 리소스와 바꿔치기
    - PATCH : PUT과 다르게 일부만 수정
    - DELETE : URL에 표시된 특정 리소스를 삭제

## JSON
1. JSON 개념
    : *J*ava<br> *S*cript<br> *O*bject<br> *N*otation
    - Key : Value 형식 
    - 데이터 교환 : JSON 형식을 자주 사용. 이전에는 XML이라는 형식도 사용했었다. 
2. JSON의 특징
    - 기존 XML보다 가볍다.
    - 많은 프로그래밍 언어가 지원한다.
    - 전송 시 : 직렬화 과정을 거친다.
    - 수신 시 : 역직렬화 과정을 거친다.
3. JSON 형식 예시
    - MDN JSON 문서 : https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON 에서 superhero data를 이용하여 실습
    1. java script가 이해할 수 있도록 let super_hero 로 선언
    2. super_hero를 입력하면 저장된 데이터를 확인할 수 있음
    3. 내용 접근 방법
        - super_hero.members : .을 통해 내부 키 값을 불러올 수 있음
        - super_hero["members"] : 위와 같은 내용을 불러올 수 있음
        - super_hero.members[0].name : 첫번째 멤버의 이름을 불러올 수 있음
    4. super_hero 직렬화
        - JSON.stringify(super_hero); : string 형식으로 만듬
    5. super_hero 역직렬화
        - let serialized = JSON.stringify(super_hero); : 내용을 직렬화 시킨 것
        - JSON.parse(serialized); : 역직렬화 시킴(처음 내용 접근 방법으로 본 것과 같이 출력됨)

## API
1. API 개념
    : *A*pplication<br> *P*rogramming<br> *I*nterface
    - Application : 우리가 사용하는 다양한 서비스들
    - Programming Interface : 서비스들이 제공해주는 데이터들에 접근하고 사용할 수 있도록 도와주는 도구
2. API의 종류
    - SOAP : Simple Object Access Protocol
    - REST : Representational State Transfer
    - GraphQL : Graph Query Language
3. REST
    : REST는 하나의 아키텍쳐
    - 소프트웨어 아키텍쳐 : 소프트웨어를 설계하는 지침과 원칙. 
    - 물론 꼭 전부 다 지켜야하는 법이 아니기 때문에 완전히 Restful한 API는 많지 않다.
    - REST의 구성요소
        - 자원 : url에 매칭이 되어있는 resource들
        - 행위 : GET, PATCH 등 행위
        - 표현 : 표현 방식은 JSON 형식