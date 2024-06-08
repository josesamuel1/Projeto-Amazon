from rest_framework import routers
from category.viewsets import CategoryViewSet


category_router = routers.DefaultRouter()
category_router.register('category', CategoryViewSet)
