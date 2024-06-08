from django.urls import path
from kart.viewsets import KartViewSet


urlpatterns = [
    path(route='kart/', view=KartViewSet.as_view(), name='kart-create-list'),
    path(route='kart/<int:pk>', view=KartViewSet.as_view(), name='kart-detail-view'),
]
