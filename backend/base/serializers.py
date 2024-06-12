from rest_framework import serializers
from .models import Car,Service
from users.models import NewUser
from rest_framework_simplejwt.tokens import RefreshToken

class CarSerializer(serializers.ModelSerializer):

    class Meta:
        model=Car
        fields='__all__'


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model=Service
        fields='__all__'


class UserSerializer(serializers.ModelSerializer):
    token=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=NewUser
        fields=[ 'id',"username", "email", "password", "first_name","last_name",
                "address","city","state","contact_number",'token']
        

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)
