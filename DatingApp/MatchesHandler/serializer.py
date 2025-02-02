from django.db.models import fields
from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import *

class SwipeSerializer(serializers.ModelSerializer):
    class Meta:
        model= SwipeR
        fields = ('__all__')

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model= Matches
        fields = ('__all__')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= NewsFeed
        fields= ('__all__')

class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Invite
        fields=('__all__')