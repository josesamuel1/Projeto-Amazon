from django.urls import path
from brand.viewsets import BrandViewSet


urlpatterns = [
    path(route='brand/', view=BrandViewSet.as_view(), name='brand-create-list'),
    path(route='brand/<int:pk>', view=BrandViewSet.as_view(), name='brand-detail-view'),
]
