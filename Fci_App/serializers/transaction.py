from rest_framework import serializers
from Fci_App.models.transaction import Transaction



class TransactionSerializer(serializers.ModelSerializer):
    # projects = ProjectOnlySerializer(many=True,read_only=True)

    class Meta:
        model = Transaction
        fields = '__all__'
       

    