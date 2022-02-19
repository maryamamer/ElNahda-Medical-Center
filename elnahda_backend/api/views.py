from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Userser,Doctorser
from user.models import Customuser,Doctor
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        print(user.username)

        # Add custom claims
        token['email'] = user.email
        # token['email'] = Customuser.email
        # token['is_superuser'] = Customuser.is_superuser
        # token['is_staff'] = Customuser.is_staff
        # print(token['username'])
        
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class User_view(viewsets.ModelViewSet):
    serializer_class = Userser
    queryset = Customuser.objects.all()
    
class Doctor_view(viewsets.ModelViewSet):
    serializer_class = Doctorser
    queryset = Doctor.objects.all()
    
@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)

