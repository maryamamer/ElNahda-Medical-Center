from django.contrib.auth.models import User
from user.models import Customuser,Doctor
from rest_framework import serializers

class Userser(serializers.ModelSerializer):
    class Meta:
        model = Customuser
        fields = ('id','fullname','username','gender','email','report','gender','password')
        extra_kwargs ={
            'password':{'write_only':True}
        }
        
class Doctorser(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

