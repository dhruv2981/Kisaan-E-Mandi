from django.db import models

class Crop(models.Model):
   
   name=models.CharField(max_length=60,unique=True)
   msp=models.IntegerField(max_length=10)
