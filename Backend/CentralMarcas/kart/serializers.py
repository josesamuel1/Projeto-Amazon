from rest_framework import serializers
from kart.models import Kart


class KartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kart
        fields = '__all__'
