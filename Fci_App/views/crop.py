from rest_framework import viewsets
from Taskify_App.serializers.crop import CropSerializer
from Taskify_App.models.crop import Crop
# from rest_framework.permissions import IsAuthenticated


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer
    # permission_classes = [IsAuthenticated]