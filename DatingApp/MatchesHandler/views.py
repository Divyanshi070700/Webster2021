from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework.permissions import IsAuthenticated
from datetime import date
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from django.db.models import Q
class SwipeView(APIView):
    serializer_class = SwipeSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser]
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        # today = date.today().year
        # detail = [ {"firstName": detail.firstName,"lastName": detail.lastName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year,"lat":detail.latitude,"lng":detail.longitude}
        # for detail in Details.objects.filter(owner=num)]
        # return Response(detail)
    def post(self, request,*args,**kwargs):
        data=request.data
        serializer = SwipeSerializer(data=data)
        num=request.user.pk
        data._mutable = True
        data['swipedBy']=num
        #data['swipedUser']=data
        data['Ddate']=date.today()
        obj=SwipeR.objects.filter( Q(swipedBy=data['swipedUser']) &
          Q(swipedUser=num))
        if (len(obj)==0):
            if (serializer.is_valid(raise_exception=True)):
               #serializer.save()
               print("swiped right: "+data['swipedUser'])
               return Response(serializer.data)
        else:

            print("match can be  done...")
            #obj[0].delete()
            # newmatch=Matches.objects.create(
            #     user1=request.user,
            #     user2=User.objects.filter(pk=data['swipedUser'])[0],
            #     Mdate=(date.today())
            # )
            #newmatch.save()
            return Response("match made")





