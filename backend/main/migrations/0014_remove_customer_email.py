# Generated by Django 5.0.1 on 2024-02-13 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_alter_customer_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='email',
        ),
    ]