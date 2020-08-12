# Django로 나를 소개해볼게

## Model이란?
- 데이터에 접속하고 관리하도록 도와주는 객체
- Django와 DataBase를 소통할 수 있도록 하는 것

## Model 생성 & 적용
1. models.py : 모델명의 첫글자는 무조건 대문자
    ```
    class Designer(models.Model):
        image = models.ImageField(upload_to = 'images/')
        name = models.CharField(max_length = 50)
        address = models.CharField(max_length = 255)
        description = models.TextField()
    ```
2. Terminal<br>
    DB가 알아듣도록 번역하기 : python manage.py makemigrations (+ App 이름)<br>
    번역한 내용을 DB에 적용 : python manage.py migrates (+ App 이름)

## Admin 기능
- Django는 웹 서비스 관리를 위한 admin 기능 기본 제공
- Terminal : python manage.py createsuperuser
- url : /admin 

## Admin에게 Model 알려주기
- admin.py<br>
    from.models import Designer<br>
    admin.site.register(Designer)

## QuerySet이란?
- 전달받은 모델의 객체 목록
- views.py 
    1. Model의 존재 알려주기 : from .models import Designer
    2. Queryset을 Templates로 보내기
        ```
        def home(request):
            designers = Designer.objects.all() # Method
            return render(request, 'home.html', {'designers' : designers})
        ```

## Detail Page 구현
- 각각의 글 분류 : PK(Primary Key)
- 각각의 글의 Path : Path Convertor
- 없는 글을 불러온다면 : get_object_or_404

## PK(Primary Key)
- Model을 통해 생성된 객체들을 구분할 수 있는 "고유한" Key

## Path Convertor
- 여러 객체의 url를 "계층적으로" 다룰 수 있도록 도와주는 도구
1. urls.py : path('profile/<int:designer_id>/', views.detail, name = "detail"),
2. Template : {% url 'detail' designer.id %}

## get_object_or_404
- Object를 가져오려 했는데 없을 경우 나타나는 에러
- views.py
    1. from django.shortcuts import render, get_object_or_404
    2. def detail(request, designer_id):
        designer = get_object_or_404(Designer, pk = designer_id)
        return render(request, 'detail.html', {'designer' : designer})

## Detail Page 구현 정리
1. Server에게 특정 객체를 달라고 Request
2. 이에 대한 URL을 서버에게 알림
3. 객체 반환 / 404 Error 호출
