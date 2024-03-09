from django.db import models
from .user import User

class Crop_register(models.Model):

    register_option=[
        ('p','private'),
        ('g','govt'),
        ('b','both'),
    ]
   
    farmer=models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='crop_registered')
    name=models.CharField(max_length=60)
    quantity=models.IntegerField(max_length=10)
    farmer_city=models.CharField(max_length=100)
    farmer_name=models.CharField(max_length=60)
    dealer_type=models.CharField(max_length=10, choices=register_option)
    
