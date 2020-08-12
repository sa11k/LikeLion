# Django는 중복을 싫어해

## URL Include
- App 별로 URL을 관리할 수 있도록 구조화<br>
    ![url](https://user-images.githubusercontent.com/63536606/89978052-996e1900-dca7-11ea-8be9-f20bdf909ba8.PNG)<br>
    ![url2](https://user-images.githubusercontent.com/63536606/89978136-c28ea980-dca7-11ea-9d17-185b7fd7e418.PNG)<br>
1. App 
    - App 폴더 내에 urls.py 생성
    - from django.urls import path
    - from . import views
    - Urlpatterns = [~~~~~]
2. Project / urls.py
    - from django.urls import path, include
    - urlpatterns = [
        path('url/', include('app이름.urls')),
    ]

## Template 상속
![template 상속](https://user-images.githubusercontent.com/63536606/89978753-38474500-dca9-11ea-9887-f629201a0427.PNG)
- base.html에서 block으로 다른 내용이 들어갈 부분을 막아놈.

![template 상속2](https://user-images.githubusercontent.com/63536606/89990949-0ee4e400-dcbe-11ea-9132-f47f67548c60.PNG)