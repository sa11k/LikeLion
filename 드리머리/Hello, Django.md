# Hello, Django

## 가상환경이란?
- 자신이 원하는 Python 환경 구축을 위해 필요한 모듈만 담아 놓는 바구니

## PIP란?
- Python으로 작성된 패키지  소프트웨어를 관리하는 패키지 관리 시스템

## Django의 Project & App
- 하나의 Project == 하나의 Web Site
- Project 안의 의미 있는 기능들을 각각의 App으로 관리
- Project
    - settings.py : 전체 프로젝트를 관리하는 설정 파일
    - urls.py : 프로젝트 URL 관리 파일
    - wsgi.py, asgi.py : 프로젝트를 서비스하기 위한 파일
    - __init__.py : 해당 디렉토리가 Python Package의 일부임을 Python에게 알려주는 파일
- App
    - views.py : 웹 요청을 받고, 전달받은 데이터를 처리해서 가공하는 파일
    - models.py : Database와 관련된 다양한 역할 수행
    - admin.py : 관리자 관련 파일
    - apps.py : Project에게 App의 존재 알려줄 때 활용되는 파일

## Home 페이지 출력하기
1. setting.py : Project에게 App의 존재 알리기
2. Templates : User에게 보여줄 HTML 파일 만들기
3. views.py : 요청이 들어오면 HTML 파일을 열어주는 함수 정의
4. urls.py : url 요청을 views와 연결하기