from django.core.exceptions import ObjectDoesNotExist
#from django.db.models.expressions import Exists
from django.shortcuts import render
from rest_framework.views import APIView
from django.db.models import Q,Subquery,Exists
from MatchesHandler.models import Matches
from MatchesHandler.models import SwipeR
from . models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework.permissions import IsAuthenticated
from datetime import date
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
import geopy.distance

def get_latlng_bounderies(lat, lng, distance):
      p0=geopy.distance.distance(kilometers=distance).destination((lat,lng), bearing=0)
      p90=geopy.distance.distance(kilometers=distance).destination((lat,lng), bearing=90)
      p180=geopy.distance.distance(kilometers=distance).destination((lat,lng), bearing=180)
      p270=geopy.distance.distance(kilometers=distance).destination((lat,lng), bearing=270)
      print(lat,lng,distance)
      ret = p180[0], p270[1], p0[0], p90[1]
      print(ret)
      return ret
# Create your views here.

class DetailView(APIView):
    serializer_class = DetailSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser,JSONParser]
    def get(self,request,*args,**kwargs):
        # serializer = UserSerializer(request.user)
        # return Response(serializer.data)
        num=request.user.pk
        today = date.today().year
        detail = [ {"pic":detail.profileImg.url,"firstName": detail.firstName,"lastName": detail.lastName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year}
        for detail in Details.objects.filter(owner=num)]
        return Response(detail)
    def post(self, request,*args,**kwargs):
        num=request.user.pk
        obj=Details.objects.filter(owner=num)
        if(len(obj)==0):
            data=request.data
            serializer = DetailSerializer(data=data)
            data['owner']=request.user.pk
            if (serializer.is_valid(raise_exception=True)):
            #if((datetime.date.today() - self.dob) > datetime.timedelta(days=18*365)):
               serializer.save()
               return Response(serializer.data)
        else:
            return Response("Already filled")


class GetSwipe(APIView):
    
    serializer_class = DetailSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser, JSONParser]
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        today = date.today().year
        objs=setPreference.objects.filter(owner=num)
        obj2s=Details.objects.filter(owner=num)
        #print("object exists",obj.distance)
        if (len(objs)!=0):
            obj=objs[0]
            obj2=obj2s[0]
            arr=get_latlng_bounderies(obj2.latitude,obj2.longitude,obj.distance)
            gen=obj.gender
            #print(gen)
            ageMin=obj.ageMin
            ageMax=obj.ageMax
            latMin=arr[0]
            latMax=arr[2]
            lonMin=arr[1]
            lonMax=arr[3]
            permitted=SwipeR.objects.filter(swipedBy=num).values('swipedUser')
            permitted2=Matches.objects.filter(user1=num).values('user2')
            permitted3=Matches.objects.filter(user2=num).values('user1')
            fo=User.objects.filter(Q(pk__in=permitted.values('swipedUser')) | Q(pk__in=permitted2.values('user2')) | Q(pk__in=permitted3.values('user1')))
            fobjs=Details.objects.filter(~Q(owner__in=fo))
            #fobjs2=Details.objects.filter(~Exists(Subquery(permitted2.values('user2'))))
            #fobjs3=Details.objects.filter(~Exists((permitted3.values('user1'))))
            print(permitted.values('swipedUser'),permitted2,permitted3)
            print(fo)
            print(fobjs)
            detail = [ {"owner":detail.owner.pk,"pic":detail.profileImg.url,"firstName": detail.firstName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year}
            for detail in fobjs.filter(latitude__lte=latMax, latitude__gte=latMin, longitude__lte=lonMax, longitude__gte=lonMin, gender=gen,dob__year__gte=today-ageMax, dob__year__lte=today-ageMin)]
            #Details.objects.filter(latitude__lte=latMax, latitude__gte=latMin, longitude__lte=lonMax, longitude__gte=lonMin, gender=gen,dob__year__gte=today-ageMax, dob__year__lte=today-ageMin
            print(len(detail))

            return Response(detail)
        else:
            #print("else was called")
            #print(num)
            obj2=Details.objects.filter(owner=num)
            print(obj2[0].firstName)
            detail = [ {"pic":detail.profileImg.url,"firstName": detail.firstName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year}
            for detail in Details.objects.all()]
            return Response(detail)
        
    

class SetPrefView(APIView):
    serializer_class=PrefSerializer
    parser_classes= [MultiPartParser,FormParser,JSONParser]
    permission_classes = [IsAuthenticated]
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        det = [ {"distance": det.distance,"ageMin": det.ageMin,"ageMax":det.ageMax,"gender":det.gender}
        for det in setPreference.objects.filter(owner=num)]
        
        return Response(det)

    def post(self, request):
        num=request.user.pk
        obj=setPreference.objects.filter(owner=num)
        if(len(obj)==0):

            data=request.data
            serializer = PrefSerializer(data=data)
            data._mutable = True
            num=request.user.pk
            data['owner']=num
            print(data)
        
            if (serializer.is_valid(raise_exception=True)):  
               #serializer.save()
               print(data)
               return Response(serializer.data)
        else:
            return Response("Already exists!")
             
