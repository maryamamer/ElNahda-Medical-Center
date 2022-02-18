from django.db import models
from django.core.validators import RegexValidator
import uuid
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User

class Users(models.Model):
    id=models.AutoField(primary_key=True)
    fullname=models.CharField(max_length=50)
    username=models.CharField(max_length=20)
    email=models.EmailField(max_length=50)
    password=models.CharField(max_length=16)
    report = models.FileField(upload_to ='uploads/% Y/% m/% d/')
    phone_regex = RegexValidator(regex=r'^01[1|0|2|5][0-9]{8}$', message='phone must be an egyptian phone number...')
    phone = models.CharField(verbose_name="phone",null=True, validators=[phone_regex], max_length=14)
    date_of_birth = models.DateField(null=True)
    record_number = models.TextField()
    address= models.TextField()
    age = models.IntegerField()
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender = models.CharField(max_length=30, choices=GENDER_CHOICES)
    guardian = models.CharField(max_length=20,null=True)
    Guardian_choices = (
        ('first degree', 'First Degree'),
        ('second degree', 'Second Degree'),
    )
    guardian_relation = models.CharField(max_length=30, choices=Guardian_choices)
    
#     id=models.AutoField(primary_key=True)
#     fullname=models.CharField(max_length=50)
#     username=models.CharField(max_length=20)
#     email=models.EmailField(max_length=50)
#     report = models.FileField(upload_to ='uploads/% Y/% m/% d/')
#     phone_regex = RegexValidator(regex=r'^01[1|0|2|5][0-9]{8}$', message='phone must be an egyptian phone number...')
#     phone = models.CharField(verbose_name="phone",null=True, validators=[phone_regex], max_length=14)
#     date_of_birth = models.DateField(null=True)
#     record_number = models.TextField()
#     address= models.TextField()
#     age = models.IntegerField()
#     GENDER_CHOICES = (
#         ('male', 'Male'),
#         ('female', 'Female'),
#     )
#     gender = models.CharField(max_length=30, choices=GENDER_CHOICES)
#     guardian = models.CharField(max_length=20,null=True)
#     Guardian_choices = (
#         ('first degree', 'First Degree'),
#         ('second degree', 'Second Degree'),
#     )
#     guardian_relation = models.CharField(max_length=30, choices=Guardian_choices)
    
    
# class Doctor(models.Model):
#     id=models.AutoField(primary_key=True)
#     fullname=models.CharField(max_length=50)
#     username=models.CharField(max_length=20)
#     email=models.EmailField(max_length=50)
#     image = models.ImageField(upload_to=f'images/{uuid.uuid4()}', blank=True)
#     phone_regex = RegexValidator(regex=r'^01[1|0|2|5][0-9]{8}$', message='phone must be an egyptian phone number...')
#     phone = models.CharField(verbose_name="phone",null=True, validators=[phone_regex], max_length=14)
#     date_of_birth = models.DateField(null=True)
#     address= models.TextField()
#     age = models.IntegerField()
#     GENDER_CHOICES = (
#         ('male', 'Male'),
#         ('female', 'Female'),
#     )
#     gender = models.CharField(max_length=30, choices=GENDER_CHOICES)
#     education_degree = models.CharField(max_length=30,null=False)
#     specialization = models.CharField(max_length=50,null=False)
#     achievements = models.TextField(null=True)
#     marital_status = (
#         ('single', 'Single'),
#         ('married', 'Married'),
#     )
#     status =  models.CharField(max_length=30, choices=marital_status) 

   
    
class Doctor(models.Model):
    id=models.AutoField(primary_key=True)
    fullname=models.CharField(max_length=50)
    username=models.CharField(max_length=20)
    email=models.EmailField(max_length=50)
    image = models.ImageField(upload_to=f'images/{uuid.uuid4()}', blank=True)
    phone_regex = RegexValidator(regex=r'^01[1|0|2|5][0-9]{8}$', message='phone must be an egyptian phone number...')
    phone = models.CharField(verbose_name="phone",null=True, validators=[phone_regex], max_length=14)
    date_of_birth = models.DateField(null=True)
    address= models.TextField()
    age = models.IntegerField()
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender = models.CharField(max_length=30, choices=GENDER_CHOICES)
    education_degree = models.CharField(max_length=30,null=False)
    specialization = models.CharField(max_length=50,null=False)
    achievements = models.TextField(null=True)
    marital_status = (
        ('single', 'Single'),
        ('married', 'Married'),
    )
    status =  models.CharField(max_length=30, choices=marital_status) 
    
    # def save(self):
    #     encodedString = base64.b64encode(self.image.file.read())
    #     data = {"key": os.environ.get("IMG_BB"), "image": encodedString.decode("utf-8")}
    #     uploadedImageInfo = requests.post("https://api.imgbb.com/1/upload", data=data)
    #     jsonResponse = json.loads(uploadedImageInfo.text)
    #     self.image = jsonResponse["data"]["display_url"]
    #     super().save()