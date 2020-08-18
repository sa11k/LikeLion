# PrimaryKey

## Primary Key(PK)란?
- 오브젝트를 식별할 수 있는 값
- 중복될 수 없는 단일 값
- 다음과 같이 pk를 지정할 수도 있음<br>
```
class MyModel(models.Model):
    my_pk = models.IntegerField(primary_key=True)
    ...
    생략
    ...
```
- 다음과 같이 pk 값을 함께 전달하며 CRUD를 요청해야함<br>
![pk](https://user-images.githubusercontent.com/63536606/90526227-15d29180-e1ab-11ea-8f70-b346605e2d14.PNG)