from django.db.models import fields
from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import *

class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model= Details
        fields = ('__all__')