# Generated by Django 4.0.2 on 2022-02-19 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0014_alter_doctor_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/7e23eb98-ffd2-4423-b1b9-4b8231175e40'),
        ),
    ]
