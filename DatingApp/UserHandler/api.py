from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework import viewsets, permissions
from . serializer import *
import datetime
# Create your views here.
class DetailViewSet(viewsets.ModelViewSet):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class = DetailSerializer

    def get_queryset(self):
        return self.request.user.leads.all()
    
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)

    # def get(self, request):
    #     detail = [ {"name": detail.firstName,"detail": detail.lastName}
    #     for detail in Details.objects.all()]
    #     return Response(detail)

    # def post(self, request):
    #     serializer = DetailSerializer(data=request.data)
    #     if (serializer.is_valid(raise_exception=True)):
    #         if((datetime.date.today() - self.date_of_birth) > datetime.timedelta(days=18*365)):


    #            serializer.save()
    #            return Response(serializer.data)

            
