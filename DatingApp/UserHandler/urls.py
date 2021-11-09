from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from DatingApp.UserHandler.views import DetailView
from core.views import *

urlpatterns = [
	path('user/', DetailView.as_view(), name="detailing"),
     
]
