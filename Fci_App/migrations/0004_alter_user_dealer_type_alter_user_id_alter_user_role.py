# Generated by Django 5.0.3 on 2024-03-09 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Fci_App', '0003_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='dealer_type',
            field=models.CharField(choices=[('private', 'private'), ('govt', 'govt'), ('farmer', 'farmer')], max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.CharField(max_length=60, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('farmer', 'farmer'), ('dealer', 'dealer')], max_length=50),
        ),
    ]
