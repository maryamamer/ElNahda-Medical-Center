# Generated by Django 4.0.2 on 2022-02-18 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_users_delete_user_alter_doctor_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/782188fd-03e0-4241-9ea7-542744409962'),
        ),
    ]