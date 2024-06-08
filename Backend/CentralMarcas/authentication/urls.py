from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path(route='authentication/token/', view=TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path(route='authentication/token/refresh', view=TokenRefreshView.as_view(), name='token-refresh-pair'),
]
