from rest_framework import serializers
from Fci_App.models.crop import Crop



class CropSerializer(serializers.ModelSerializer):
    # projects = ProjectOnlySerializer(many=True,read_only=True)

    class Meta:
        model = Crop
        fields = '__all__'
       

    