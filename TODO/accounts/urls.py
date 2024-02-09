
from django.urls import path, include
from . import views


urlpatterns = [
    # path('', views.login, name='login form'),
    path('register', views.register, name='registration form'),
    path('login', views.login, name='login form'),
    path('base2', views.base2, name='login form'),
    
]