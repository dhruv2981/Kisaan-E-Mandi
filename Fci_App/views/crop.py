from rest_framework import viewsets
from Fci_App.serializers.crop import CropSerializer
from Fci_App.models.crop import Crop
# from rest_framework.permissions import IsAuthenticated


# Create your views here.


class CropViewSet(viewsets.ModelViewSet):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer
    # permission_classes = [IsAuthenticated]