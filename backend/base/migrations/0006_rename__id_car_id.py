# Generated by Django 4.2.7 on 2024-06-08 13:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_car_chassis'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='_id',
            new_name='id',
        ),
    ]
