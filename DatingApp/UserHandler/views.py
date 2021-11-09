from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework.permissions import IsAuthenticated
from datetime import date
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.
class DetailView(APIView):
    
    serializer_class = DetailSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser]
    def get_queryset(self,request):
        # serializer = UserSerializer(request.user)
        # return Response(serializer.data)
        num=request.user.pk
    
        today = date.today().year
        detail = [ {"firstName": detail.firstName,"lastName": detail.lastName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year}
        for detail in Details.objects.filter(owner=num)]
        return Response(detail)

    def post(self, request,*args,**kwargs):
        data=request.data
        serializer = DetailSerializer(data=data)
        data['owner']=request.user.pk
        if (serializer.is_valid(raise_exception=True)):
            #if((datetime.date.today() - self.dob) > datetime.timedelta(days=18*365)):

               
               serializer.save()
               return Response(serializer.data)

            
