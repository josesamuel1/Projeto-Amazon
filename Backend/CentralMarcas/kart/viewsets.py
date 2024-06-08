from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from kart.models import Kart
from kart.serializers import KartSerializer


class KartViewSet(viewsets.ModelViewSet):
    queryset = Kart.objects.all()
    serializer_class = KartSerializer
    permission_classes = [IsAuthenticated,]
