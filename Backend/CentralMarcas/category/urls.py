from django.urls import path
from category.viewsets import CategoryViewSet

urlpatterns = [
    path(route='category/', view=CategoryViewSet.as_view(), name='category-create-list'),
    path(route='category/<int:pk>', view=CategoryViewSet.as_view(), name='category-detail-view'),
]
