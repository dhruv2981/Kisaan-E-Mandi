from rest_framework import viewsets
from Fci_App.serializers.transaction import TransactionSerializer, TransactionVerboseSerializer
from Fci_App.models.transaction import Transaction
# from rest_framework.permissions import IsAuthenticated


# Create your views here.


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    # permission_classes = [IsAuthenticated]

class TransactionReadOnlyViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionVerboseSerializer