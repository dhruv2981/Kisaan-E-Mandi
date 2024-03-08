from django.urls import include, path
from rest_framework import routers
from Fci_App.views.crop import CropViewSet
from Fci_App.views.user import UserViewSet
from Fci_App.views.crop_register import Crop_registerViewSet
from Fci_App.views.transaction import TransactionViewSet



router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('crops', CropViewSet)
router.register('crop_registers', Crop_registerViewSet)
router.register('transactions', TransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    
]