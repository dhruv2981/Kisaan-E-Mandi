from django.db import models
# from django.contrib.auth.models import AbstractUser

class User(models.Model):
    user_roles = [
        ('kisan', 'kisan'),
        ('dealer', 'dealer')
    ]
    
    dealer_types = [
        ('private', 'private'),
        ('govt', 'govt'),
        ('kisan', 'kisan')
    ]

    username = models.CharField(max_length=60,unique=True)
    password= models.CharField(max_length=60)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    role = models.CharField(max_length=50, choices=user_roles)
    dealer_type = models.CharField(max_length=50, choices=dealer_types)
