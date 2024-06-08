# Generated by Django 5.0.6 on 2024-05-14 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0015_alter_product_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='size',
            field=models.CharField(choices=[('P', 'PP'), ('GG', 'GG'), ('M', 'M'), ('P', 'P'), ('XG', 'XG'), ('G', 'G')], default='', max_length=2),
        ),
    ]
