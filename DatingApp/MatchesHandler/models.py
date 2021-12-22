from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import DateField
from django.db.models.fields.related import ForeignKey


def upload_to(instance, filename):
    return 'postImgs/{filename}'.format(filename=filename)

class SwipeR(models.Model):
    swipedBy=models.ForeignKey(User,related_name="swipeBy",on_delete=models.CASCADE,null=True)
    swipedUser=models.ForeignKey(User,related_name="swipeUse",on_delete=models.CASCADE,null=True)
    Ddate=models.DateField()

class Matches(models.Model):
    user1=models.ForeignKey(User,related_name="user1",on_delete=models.CASCADE,null=True)
    user2=models.ForeignKey(User,related_name="user2",on_delete=models.CASCADE,null=True)
    Mdate=models.DateField()
    
class NewsFeed(models.Model):
    owner=models.ForeignKey(User,related_name='postowner',on_delete=models.CASCADE)
    createdAt=models.DateTimeField()
    img=models.ImageField(null=True,blank=True,upload_to=upload_to)
    caption=models.TextField(max_length=100,null=True,blank=True)
