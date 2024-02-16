# Generated by Django 5.0.1 on 2024-02-16 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0023_rename_order_time_order_created_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customeradddress',
            name='customer',
        ),
        migrations.DeleteModel(
            name='ProductCategory',
        ),
        migrations.RemoveField(
            model_name='vendor',
            name='user',
        ),
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.TextField(default=''),
        ),
        migrations.DeleteModel(
            name='CustomerAdddress',
        ),
        migrations.DeleteModel(
            name='Vendor',
        ),
    ]
