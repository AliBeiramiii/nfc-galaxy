# Generated by Django 5.0.1 on 2024-02-13 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_alter_customer_mobile'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.EmailField(default='example@example.com', max_length=254, unique=True),
        ),
    ]