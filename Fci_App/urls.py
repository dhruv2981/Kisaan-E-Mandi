from django.urls import include, path
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from Fci_App.views.auth import LoginView
from Fci_App.views.crop import CropViewSet
from Fci_App.views.user import UserViewSet
from Fci_App.views.crop_register import Crop_registerViewSet
# ,CropListingByUser
from Fci_App.views.transaction import TransactionViewSet, TransactionReadOnlyViewSet



router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('crops', CropViewSet)
router.register('crop_registers', Crop_registerViewSet)
router.register('transactions', TransactionViewSet)
router.register('readonly', TransactionReadOnlyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view()),
    # path('crop_registers/<slug:fid>/', CropListingByUser.as_view()),
    path('auth/', include('rest_framework.urls')),
    
]

