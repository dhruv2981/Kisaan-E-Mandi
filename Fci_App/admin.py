from django.contrib import admin
from Fci_App.models.user import User
from Fci_App.models.transaction import Transaction
from Fci_App.models.crop import Crop
from Fci_App.models.crop_register import Crop_register

# Register your models here.
admin.site.register(User)
admin.site.register(Transaction)
admin.site.register(Crop)
admin.site.register(Crop_register)
