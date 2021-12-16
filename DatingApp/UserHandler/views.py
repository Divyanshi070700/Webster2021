from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework.views import APIView
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
    parser_classes= [MultiPartParser, FormParser]
    def get(self,request,*args,**kwargs):
        # serializer = UserSerializer(request.user)
        # return Response(serializer.data)
        num=request.user.pk
        today = date.today().year
        detail = [ {"firstName": detail.firstName,"lastName": detail.lastName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year,"lat":detail.latitude,"lng":detail.longitude}
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

class GetSwipe(APIView):
    
    serializer_class = DetailSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser, JSONParser]
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        today = date.today().year
        obj=setPreference.objects.filter(owner=num)[0]
        obj2=Details.objects.filter(owner=num)[0]
        #print("object exists",obj.distance)
        if obj:
            arr=get_latlng_bounderies(obj2.latitude,obj2.longitude,obj.distance)
            gen=obj.gender
            #print(gen)
            ageMin=obj.ageMin
            ageMax=obj.ageMax
            latMin=arr[0]
            latMax=arr[2]
            lonMin=arr[1]
            lonMax=arr[3]
            detail = [ {"pic":detail.profileImg.url,"firstName": detail.firstName,"Occupation":detail.occupation,"Bio":detail.bio, "Age":today-detail.dob.year}
            for detail in Details.objects.filter(latitude__lte=latMax, latitude__gte=latMin, longitude__lte=lonMax, longitude__gte=lonMin, gender=gen,dob__year__gte=today-ageMax, dob__year__lte=today-ageMin)]
            
            #print(detail[0])

            return Response(detail)
        else:
            print("else was called")
            print(num)
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
        #get_latlng_bounderies(Details.objects.filter(owner=num)[0].latitude,Details.objects.filter(owner=num)[0].longitude,10)
        return Response(det)

    def post(self, request):
        data=request.data
        serializer = PrefSerializer(data=data)
        data._mutable = True
        num=request.user.pk
        data['owner']=num
        print(data)
        
        if (serializer.is_valid(raise_exception=True)):  
               serializer.save()
               print(data)
               return Response(serializer.data)
             
