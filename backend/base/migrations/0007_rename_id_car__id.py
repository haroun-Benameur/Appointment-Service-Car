# Generated by Django 4.2.7 on 2024-06-08 13:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_rename__id_car_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='id',
            new_name='_id',
        ),
    ]
