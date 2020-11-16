from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('auth/', include('drf_social_oauth2.urls', namespace='drf')),
    path('admin/', admin.site.urls),
    path('api/',include('siteapp_api.urls')),
    path('api/user/', include('users.urls', namespace='users')),
    path('api-auth/', include('rest_framework.urls')),
    path('docs/', include_docs_urls(title='FB API')),
    path('schema', get_schema_view(
        title="FaceBook API",
        description="API for FB Page management",
        version='1.0.0'),
         name='openapi_schema'),
]