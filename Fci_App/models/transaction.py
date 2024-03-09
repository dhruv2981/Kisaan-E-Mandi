from django.db import models
from django.utils import timezone
from .user import User
from .crop_register import Crop_register

class Transaction(models.Model):
    STATUS_CHOICES = [
        ('waiting_for_farmer', 'Waiting for Farmer'),
        ('rejected', 'rejected'),
        ('delivered', 'Delivered'),
        ('deal_done', 'Deal Done'),
        ('payment_done', 'Payment Done'),
        ('late', 'Late')
    ]

    farmer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions_as_farmer')
    dealer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions_as_dealer')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    price = models.IntegerField(max_length=10)
    crop_register = models.ForeignKey(Crop_register, on_delete=models.CASCADE)
    deal_Date= models.DateTimeField()
    created_at = models.DateTimeField(default=timezone.now)
    delivery_date = models.DateTimeField()

    def __str__(self):
        return f"Transaction: {self.pk} - Farmer: {self.farmer.username} - Dealer: {self.dealer.username} - Status: {self.status}"
