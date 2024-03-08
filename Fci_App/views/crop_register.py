from rest_framework import viewsets
from Taskify_App.serializers.crop_register import Crop_registerSerializer
from Taskify_App.models.crop_register import Crop_register
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = Crop_register.objects.all()
    serializer_class = Crop_registerSerializer
    # permission_classes = [IsAuthenticated]