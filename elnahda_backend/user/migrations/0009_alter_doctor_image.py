# Generated by Django 4.0.2 on 2022-02-20 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_alter_doctor_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/a07cae27-a0c5-431c-9415-71bd80867587'),
        ),
    ]
