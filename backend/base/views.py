
from django.shortcuts import render
from django.http  import HttpResponse
from rest_framework.response import Response
from base.serializers import CarSerializer,ServiceSerializer, UserSerializer
from .models import Car,Service
from rest_framework.decorators import api_view,permission_classes
from users.models import NewUser
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework import status

def index ( request):
    return HttpResponse('<h1>hello</h1>')

@api_view(['GET'])
def getCars(request):
    cars=Car.objects.all()
    serializers=CarSerializer(cars,many=True)
    return Response(serializers.data)

@api_view(['GET'])
def getCar(request,pk):
    car=Car.objects.get(id=pk)
    serializer=CarSerializer(car,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsOwner(request,pk):
    cars=Car.objects.filter(owner=pk)
    serilizer=CarSerializer(cars,many=True)
    return Response(serilizer.data)


@api_view(['GET']) 
def getServices(request):
    services=Service.objects.all()
    serializer=ServiceSerializer(services,many=True)
    return Response(serializer.data)


@api_view(['post'])
def Register(request):
    try:
        data = request.data
        user = NewUser.objects.create(
            email=data['email'],
            username=data['userName'],
            first_name=data['firstName'],
            last_name=data['lastName'],
            password=data['password'],#makePassword
            about=data['about'],
            address=data['address'],
            contact_number=data['contactNumber'],
            city=data['city'],
            state=data['state'],
        )
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except KeyError as e:
        return Response({"error": f"Missing required field: {e}"}, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=400)


#login

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    def validate(self,attrs):
        data=super().validate(attrs)
       
        serializer=UserSerializer(self.user).data
        for k,v in serializer.items(): #data['email']=self.user.email
            data[k]=v
            
        return data
    
class MyTokenObtainPairView(TokenObtainPairView) :
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes( [IsAuthenticated] )
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes( [IsAuthenticated] )
def updatedUserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    data=request.data
    user.first_name=data["first_name"]
    user.last_name=data['last_name']
    user.email=data['email']
    user.address=data['address']
    user.contact_number=data['contact_number']
    
    user.city=data['city']
    user.state=data['state']
    if data['password']!='':
        user.password=data['password']
    
    user.save()
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addCar(request):
   
    try:
        user = request.user
        data = request.data

        newCar = Car.objects.create(
            owner=user,
            model=data['model'],
            chassis=data['chassis'],
            matricule=data['matricule'] ,                      
            fuel=data['fuel'],
            mileage=data['mileage']
        )

        serializer = CarSerializer(newCar, many=False)
        return Response(serializer.data)
    except KeyError as e:
         return Response({"error": f"Missing required field: {e}"}, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=400)
