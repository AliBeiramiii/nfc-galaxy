# Generated by Django 5.0.1 on 2024-02-10 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_customer_mobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='mobile',
            field=models.PositiveBigIntegerField(),
        ),
    ]
