# CRUD

## CRUD란?
- 'C'reate 'R'ead 'U'pdate 'D'elete의 약어

## GET / POST
- 클라이언트에서 서버로 요청을 보내는 방법
1. GET
    - Data를 "URL"에 포함시켜 전송
    - 전송하는 길이에 제약 O
    - Caching 가능
    - REST에서 데이터 조회에 활용
    - READ에서 활용
2. POST
    - Data를 "Body"에 넣어 전송(URL에서 노출 X)
    - 전송하는 길이에 제약 X
    - Caching 불가능
    - REST에서 데이터 생성에 활용
    - CREATE / UPDATE에서 활용

## CREATE
- 새로운 객체를 생성해 Data를 저장
1. 객체 생성 
    ```
    if request.method == 'POST':
        post = Designer()
    ```
2. 입력 Data 저장
    ```
    post.name = request.POST['name']
    post.address = request.POST['address']
    ...
    ```
3. 입력 Data 저장
    ```
    post.save()
    ```

## UPDATE
- 정보 수정이 필요한 객체를 찾아 Data를 새롭게 저장
1. 객체 탐색
    ```
    post = get_object_or_404(Designer, pk = designer_id)
    if request.method == 'POST':
    ...
    ```
2. 입력 Data 저장
    ```
    post.name = request.POST['name']
    post.address = request.POST['address']
    ...
    ```
3. 입력 Data 저장
    ```
    post.save()
    ```

## DELETE
- 제거가 필요한 객체를 찾아 삭제
1. 객체 탐색
    ```
    post = get_object_or_404(Designer, pk = designer_id)
    ```
2. 객체 삭제
    ```
    post.delete()
    ```
3. Home으로 이동
    ```
    return redirect('home')
    ```

## 패키지 종속성 관리
- 내 환경에서 어떤 패키지를 어떤 버전으로 사용하고 있는지 알려주는 것
![패키지 종속성 관리](https://user-images.githubusercontent.com/63536606/90001893-ef08ec80-dccc-11ea-9288-9290ae5558a3.PNG)