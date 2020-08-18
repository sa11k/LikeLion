# User

## User 모델
- Django에서 지원하는 회원관리 시스템을 이용

### Url 상속
- 상속
```
from django.urls import path
urls.py -> path('', include('main.urls'))
import include
```

## 로그인 / 로그아웃
- 로그인 : Django auth - 로그인 뷰
- 로그아웃 : Django auth - 로그아웃 뷰

```
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
```
