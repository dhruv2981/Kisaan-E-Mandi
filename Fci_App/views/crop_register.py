from rest_framework import viewsets
from Fci_App.serializers.crop_register import Crop_registerSerializer
from Fci_App.models.crop_register import Crop_register
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class Crop_registerViewSet(viewsets.ModelViewSet):
    queryset = Crop_register.objects.all()
    serializer_class = Crop_registerSerializer
    # permission_classes = [IsAuthenticated]

# class CropListingByUser(generics.ListAPIView):
#     serializer_class = Crop_registerSerializer

#     def get_queryset(self):
#         farmer = self.kwargs["fid"]
#         return Crop_register.objects.filter(farmer=farmer)        
    