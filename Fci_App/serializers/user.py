from rest_framework import serializers
from Fci_App.models.user import User



class UserSerializer(serializers.ModelSerializer):
    # projects = ProjectOnlySerializer(many=True,read_only=True)

    class Meta:
        model = User
        fields = '__all__'
       

    