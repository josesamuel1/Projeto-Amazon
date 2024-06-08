from rest_framework import routers
from kart.viewsets import KartViewSet


kart_router = routers.DefaultRouter()
kart_router.register('kart', KartViewSet)
