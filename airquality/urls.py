from django.urls import path
from .views import air_quality_view

urlpatterns = [
    path('air-quality/', air_quality_view, name='air_quality'),
]
