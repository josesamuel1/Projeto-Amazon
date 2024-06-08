from django.contrib import admin
from kart.models import Kart


@admin.register(Kart)
class KartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'quantity')
