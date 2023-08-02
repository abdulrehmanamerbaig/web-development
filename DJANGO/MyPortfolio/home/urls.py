from django.contrib import admin
from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home', views.home, name='home'),
    path('contact', views.contact, name='contact'),
    path('project', views.project, name='project'),
    path('skills', views.skills, name='skills')
]

# ADMIN PAGE CUSTOMIZATION
admin.site.index_title = "Welcome"
admin.site.site_title = "ARA Portfolio"
admin.site.site_header = "Welcome to ARA Portfolio"
