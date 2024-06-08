from django.urls import path
from product.viewsets import ProductViewSet


urlpatterns = [
    path(route='product/', view=ProductViewSet.as_view(), name='product-create-list'),
    path(route='product/<int:pk>', view=ProductViewSet.as_view(), name='product-detail-view'),
]
