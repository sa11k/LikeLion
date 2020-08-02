# Postman 실습, 공적 마스크 API 살펴보기

## REST API 실습, Open API
1. JSONPlaceholder
    - Fake online REST API
    - REST API를 테스트, 프로토타이핑 가능
    - 사이트 주소 : https://jsonplaceholder.typicode.com (Resources, Routes 주목)
    - Resources : 정보들을 담고 있음
    - Routes : Resouurce에 접근하여 활용하려고 할때 (url을 알아야 접근할 수 있음)
2. URL의 구성
    - 프로토콜 : http, https, file 등
    - 호스트주소 : www.naver.com, www.google.com
    - 파일경로 : /home, /index.html
    - Query parameter : ?id=1&postId=1 (검색, 필터링, 데이터 교환 시 사용)
3. Postman 실습
    - postman 실행 (회원가입 및 로그인)
    - '+' 버튼 클릭
    - (GET) jsonplaceholder에서 복사해 온 url을 이용하여 GET 실행 : 복사해 온 url에서 보던 코드를 볼 수 있음
    - (POST) jsonplaceholder에서 복사해 온 url을 이용하여 POST 실행 : 내용을 입력하지 않으면 아이디만 자동으로 생성되는 모습을 볼 수 있음
    - (POST) jsonplaceholder에서 복사해 온 url을 이용하여 POST를 실행할 때 Body에 raw - JSON 설정 후 다음 내용을 입력해주면
        ```
        {
            "userId": 1,
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        }
        ```
        ![JSON](https://user-images.githubusercontent.com/63536606/89117819-de41c500-d4db-11ea-8b08-b35f37b11220.PNG)
        위와 같은 화면을 볼 수 있다.
        id 필드는 유일해야하므로 서버에서 설정해 줌.
    - (PUT) jsonplaceholder에서 복사해 온 url을 이용하여 PUT 실행 : 내용을 수정할 수 있음 (전체 내용)
    - (PATCH) jsonplaceholder에서 복사해 온 url을 이용하여 PATCH 실행 : 내용을 수정할 수 있음 (일부 내용)
    - (DELETE) jsonplaceholder에서 복사해 온 url을 이용하여 DELETE 실행 : 내용을 삭제할 수 있음