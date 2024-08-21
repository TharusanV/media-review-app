from django.urls import path
from .views import MediaListCreate, MediaDetail

urlpatterns = [
    path('media/', MediaListCreate.as_view(), name='media-list-create'),
    path('media/<int:pk>/', MediaDetail.as_view(), name='media-detail'),
]