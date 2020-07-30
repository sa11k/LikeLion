# Github 기초

## Github란?
Git(파일의 변천사를 저장) + hub

1. Git은 코드의 변화를 기록한다.
2. Github는 git과 코드를 저장하고 관리하는 서비스

- 개발자의 포트폴리오 역할로도 쓰인다.


## Github 환경설정
1. [git](https://git-scm.com/downloads) : git bash도 함께 다운로드
2. git bash
3. [GitHub](https://github.com/) : 계정 생성

## Repository 생성 및 첫 푸시
1. [Github](https://github.com/) 웹사이트에서 Repository 생성
 - New 버튼을 이용하여 새로운 Repository 생성
 - Repository Name 설정
 - Description : 설명 작성 (필수 아님)
 - Public / Private 선택
 - Create Repository
 - 맨 위의 주소 복사해놓기 (Push 할 때 필요)
2. Visual code에서 업로드하고 싶은 코드를 준비
3. 터미널 창 열기
4. 해당 코드가 있는 디렉토리로 이동 (cd 명령어 이용)
5. '$ git init' 입력 : git을 시작한다는 것을 의미
6. '$ git remote add origin repository 주소' 입력 : repository 주소를 연결하기 위함
7. '$ git add .' 입력 : git에 내용을 추가한다는 것 (.은 모든 것을 추가한다는 의미) - 로컬 상에 내용을 얹어놓은 상태임
8. '$ git commit -m "commit에 대한 설명"' 입력
9. '$ git push origin master' 입력 : master로 올라가게 됨

## 변경된 코드 푸시
1. 변경된 코드 준비 후 저장
2. 위의 과정에서 7, 8, 9번을 반복
