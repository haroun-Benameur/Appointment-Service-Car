from django.db import models
from users.models import NewUser

class Service(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
   
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    icone = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    description = models.TextField(null=True, blank=True)
     
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    
class Car(models.Model):
    
    id = models.AutoField(primary_key=True, editable=False)
    owner = models.ForeignKey(NewUser, on_delete=models.SET_NULL, null=True)
    chassis = models.CharField(max_length=200, null=True, blank=True)
    model = models.CharField(max_length=200, null=True, blank=True)
    matricule = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    fuel = models.DecimalField(max_digits=10, decimal_places=2)
    mileage = models.DecimalField(max_digits=10, decimal_places=2)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.model)
