from .views import *
from django.urls import path

app_name = 'site_api'

urlpatterns = [
    path('', PostList.as_view(), name='listpost'),

]