from rest_framework import routers
from product.viewsets import ProductViewSet


product_router = routers.DefaultRouter()

product_router.register('product', ProductViewSet)
