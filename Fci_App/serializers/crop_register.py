from rest_framework import serializers
from Fci_App.models.crop_register import Crop_register



class Crop_registerSerializer(serializers.ModelSerializer):
    # projects = ProjectOnlySerializer(many=True,read_only=True)

    class Meta:
        model = Crop_register
        fields = '__all__'
       

    