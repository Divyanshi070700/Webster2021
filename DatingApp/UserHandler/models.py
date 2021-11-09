from django.db import models
from django.contrib.auth.models import User
# Create your models here.


def upload_to(instance, filename):
    return 'profiles/{filename}'.format(filename=filename)

class Details(models.Model):
    owner=models.ForeignKey(User,related_name="dee",on_delete=models.CASCADE,null=True)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    gender = models.CharField(max_length=30)
    dob = models.DateField(blank=True,null=True)
    occupation = models.CharField(max_length=30)
    bio = models.CharField(max_length=100)
    latitude= models.DecimalField(max_digits=12,decimal_places=9)
    longitude= models.DecimalField(max_digits=12, decimal_places=9)
    profileImg= models.ImageField(blank=True, null=True,upload_to=upload_to)
	
	