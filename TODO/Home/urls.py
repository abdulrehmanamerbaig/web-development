from django.contrib import admin
from django.urls import path, include
from Home import views
from accounts import views as account_view

urlpatterns = [
    path('', views.todo, name='todo_list'),
    path('home', views.todo, name='todo_list'),
    path('about', views.about, name='tasks'),
    path('account', views.account_access, name='accounts access'),
    path('login', account_view.login, name='login form'),
    path('register', account_view.register, name='registration form'),
    path('logout', account_view.logout, name='logout'),
    path('delete_task/<task_id>', views.delete_task, name='Delete Task'),
    path('update_task/<task_id>', views.update_task, name='Update Task'),
    path('update_status/<task_id>', views.update_status, name='Update Status'),
    path('sort_priority_asc', views.sort_priority, name='sort data'),
    path('sort_priority_desc', views.sort_priority_desc, name='sort data'),
    path('sort_priority_asc_search/<str:task_title>/', views.sort_priority_search, name='sort_priority_asc_search'),
    path('sort_priority_desc_search/<str:task_title>/', views.sort_priority_desc_search, name='sort data'),
    path('search', views.search_task, name = 'searching_task'),
    path('sort_priority_desc', views.sort_priority_desc, name='sort data'),
    path('sort_alphabetically', views.sort_task_names, name='sort names'),
    path('reverse_sort_alphabetically', views.sort_task_names_desc, name='reverse sort names'),
    
    
]