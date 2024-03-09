from django.db import models
# from django.contrib.auth.models import AbstractUser

class User(models.Model):
    user_roles = [
        ('farmer', 'farmer'),
        ('dealer', 'dealer')
    ]
    
    dealer_types = [
        ('private', 'private'),
        ('govt', 'govt'),
        ('farmer', 'farmer')
    ]

    id = models.CharField(max_length=60, primary_key=True)
    username = models.CharField(max_length=60)
    password= models.CharField(max_length=60)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    role = models.CharField(max_length=50, choices=user_roles)
    dealer_type = models.CharField(max_length=50, choices=dealer_types)
