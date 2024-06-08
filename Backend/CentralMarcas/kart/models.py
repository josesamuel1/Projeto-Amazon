from django.db import models
from product.models import Product
from authuser.models import User
from django.core.validators import MinValueValidator


class Kart(models.Model):
    class StatusKart(models.IntegerChoices):
        ON_KART = 1, 'No carrinho'
        PRODUCT_ORDERED = 2, 'Compra encomendada'
        WAITING_PAYMENT = 3, 'Esperando pagamento'
        ON_TRANSPORTER = 4, 'Na transportadora'

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userKart', default='')
    product = models.ManyToManyField(Product, related_name='productKart')
    quantity = models.IntegerField(default=1, validators=[MinValueValidator(1, 'Quantidade no carrinho não pode ser inferior ou igual a zero.')])
    status = models.IntegerField(choices=StatusKart.choices, default=StatusKart.ON_KART)

    def __str__(self):
        return f'{self.product}'
