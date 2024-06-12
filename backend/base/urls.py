from django.urls import path
from . import views
from .views import MyTokenObtainPairView
urlpatterns = [
    path('',views.index,name='index'),
    path('login',MyTokenObtainPairView.as_view(),name='login'),
    path('profile',views.getUserProfile,name='profile'),
    path('cars',views.getCars,name='cars'),
    path('cars/owner/<str:pk>',views.getCarsOwner,name='cars'),
    path('cars/<int:pk>',views.getCar,name='car'),
    path('cars/addcar',views.addCar,name='addCar'),
    path('service',views.getServices,name='services'),
    path('register',views.Register,name='register'),
    path('profile/update',views.updatedUserProfile,name="user-profile-updated") ]
 