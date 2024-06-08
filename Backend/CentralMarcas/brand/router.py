from rest_framework import routers
from brand.viewsets import BrandViewSet

brand_router = routers.DefaultRouter()
brand_router.register('brand', BrandViewSet)
