# Github 협업

## 자주 쓰는 Git 명령어
- git init : git 저장소를 초기화
- git add . : 폴더에 변경된 모든 파일 staging area에 올리기
- git commit -m "커밋에 대한 설명" : 유사시 돌아갈 수 있는 저장소의 체크 포인트 생성
- git remote add origin http://원격 저장소 주소.git : 원격 저장소(remote repository) 연결

![git](https://user-images.githubusercontent.com/63536606/88882519-1e4f4080-d26d-11ea-9076-77b50ccaf07d.PNG)


- git branch 브랜치 명 : 새로운 브랜치를 생성
- git checkout 브랜치 명 : 해당 브랜치로 이동
- git push origin 브랜치 : 원격 저장소의 특정 브랜치에 프로젝트 저장
- git pull origin 브랜치 : 원격 저장소의 특정 브랜치에서 변경사항 pull 해오기
- git clone http://원격 저장소 주소.git : 원격 저장소에 있는 파일 전체 복사
- git status : git 저장소의 상태를 확인

![git2](https://user-images.githubusercontent.com/63536606/88882966-062bf100-d26e-11ea-9942-e339a405484e.PNG)

## Github를 이용한 협업
1. 원격 저장소 생성(Github repository 생성)
2. 팀원을 Collaborator로 추가
    - settings - Manage access - invite a collaborator
    - 팀원이 collaborator 초대 수락
3. 초기 프로젝트 push
    - 코드가 들어있는 디렉토리로 이동
    - $ git init : 저장소 초기화
    - $ git remote add origin url : 원격 저장소 연결
    - $ git add . : staging area에 올림
    - $ git commit -m "설명"
    - $ git status : staging area에 남아있는 것을 확인
    - $ git push origin master : repository에 초기 프로젝트 올림
4. 팀원들의 로컬에 프로젝트 pull
    - git clone을 사용해도 됨
    - 저장하려는 디렉토리로 이동
    - $ git clone repository url : 코드가 다운이 받아짐
5. 팀원 각자의 브랜치를 생성하여 작업
    - $ git branch : 브랜치 확인 (디폴트 브랜치는 master)
    - $ git branch james : james라는 브랜치 생성
    - $ git checkout james : james라는 브랜치로 전환
    - 내용 수정
    - $ git add .
    - $ git status : 수정된 부분 확인 가능
    - $ git commit -m "내용"
6. 브랜치에 작업한 내용을 push
    - $ git push origin **james** : 새로운 브랜치가 만들어지면서 그 브랜치에 변경사항이 올라간 것
7. Master와 merge 하기 전 pull request
    - Master에는 완성품이 담겨있어야 함
    - 따라서 팀원들에게 확인을 받아야 함
    - pull requests - new pull request - base(어디에 적용할 것인가) 선택 - compare(어떤 것을 적용할 것인가) 선택
    - 수정사항 비교 가능함
    - create pull request : 내용 작성하여 pull request 
8. Pull request 확인 후 Master와 merge
    - 내용 확인
    - 문제사항 없으면 merge pull request - confirm merge
    - 변경된 모습 확인 가능

## Fork를 이용한 협업
1. 작업하고 싶은 Repository fork 해오기
    - fork 버튼 클릭 : 자동으로 fork 됨
2. 자신의 로컬에서 작업
    - fork한 repository의 url 복사
    - 저장할 폴더로 이동
    - $ git clone fork_url : 복제
    - 내용 수정 - 저장
    - $ git status : 수정된 부분을 확인할 수 있음
3. 변경사항을 자신의 브랜치에 push
    - $ git add .
    - $ git commit -m "내용" : 로컬 git 저장소에 저장됨
    - $ git checkout -b 이름 : 이름 브랜치로 바로 전환
    - $ git push origin 이름 : 변경사항이 새로운 브랜치에 올라감
4. 원본 repository 소유자에게 pull request 요청
    - pull requests - new pull request - base(어디에 적용할 것인가) 선택 - compare(어떤 것을 적용할 것인가) 선택
    - create pull request : 내용 작성하여 pull request 
5. 소유자가 pull request를 승인하여 merge하면 자동으로 collaborator 추가