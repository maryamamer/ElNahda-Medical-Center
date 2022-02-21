# Generated by Django 4.0.2 on 2022-02-21 17:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_alter_doctor_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='customuser',
            name='doctor_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user.doctor'),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/d1de9e17-9c83-47d2-901f-2270cbe012cf'),
        ),
        migrations.CreateModel(
            name='PatientAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.appointment')),
                ('patient_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DoctorAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.appointment')),
                ('doctor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.doctor')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_description', models.TextField(blank=True, null=True)),
                ('doctor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.doctor')),
                ('patient_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
