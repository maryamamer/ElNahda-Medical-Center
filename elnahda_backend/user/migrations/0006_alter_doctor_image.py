# Generated by Django 4.0.2 on 2022-02-17 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_doctor_fullname_alter_doctor_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/8fbc3cbd-3ef9-4a46-bbfb-8bc5c2343250'),
        ),
    ]