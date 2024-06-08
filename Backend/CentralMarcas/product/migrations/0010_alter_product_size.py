# Generated by Django 5.0.6 on 2024-05-09 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0009_alter_product_price_alter_product_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='size',
            field=models.CharField(choices=[('XG', 'XG'), ('P', 'PP'), ('GG', 'GG'), ('M', 'M'), ('G', 'G'), ('P', 'P')], default='', max_length=2),
        ),
    ]