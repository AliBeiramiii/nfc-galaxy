# Generated by Django 5.0.1 on 2024-02-08 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_customeradddress_default_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='mobile',
            field=models.PositiveBigIntegerField(unique=True),
        ),
    ]
