from django.db import models
from brand.models import Brand
from category.models import Category
from django.core.validators import MinValueValidator


class Product(models.Model):
    sizes = {
        ("P", "P"),
        ("PP", "PP"),
        ("M", "M"),
        ("G", "G"),
        ("GG", "GG"),
        ("XG", "XG"),
    }

    name = models.CharField(max_length=50)
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    size = models.CharField(max_length=2, choices=sizes, default='')
    image = models.ImageField(upload_to='product/')
    price = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0, 'Preço do produto não pode ser inferior ou igual a zero.')])

    def __str__(self):
        return self.name
