from rest_framework import viewsets
from Taskify_App.serializers.transaction import TransactionSerializer
from Taskify_App.models.transaction import Transaction
# from rest_framework.permissions import IsAuthenticated


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    # permission_classes = [IsAuthenticated]