from django.core.exceptions import ObjectDoesNotExist
from rest_framework.serializers import Serializer
from rest_framework.views import APIView

from UserHandler.models import Details
from . models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework.permissions import IsAuthenticated
from datetime import date, datetime
from django.contrib.humanize.templatetags.humanize import naturalday, naturaltime

from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from django.db.models import Q

class SwipeView(APIView):
    serializer_class = SwipeSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser]
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        permitted2=Matches.objects.filter(user1=num).values('user2')
        permitted3=Matches.objects.filter(user2=num).values('user1')
        fo=User.objects.filter(Q(pk__in=permitted2.values('user2')) | Q(pk__in=permitted3.values('user1')))
        fobjs=Details.objects.filter(Q(owner__in=fo))
        #today = date.today().year
        detail = [ {"pic":detail.profileImg.url ,"firstName": detail.firstName,"lastName": detail.lastName,"Occupation":detail.occupation,"Bio":detail.bio}
        for detail in fobjs.all()]
        return Response(detail)
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
            obj[0].delete()
            newmatch=Matches.objects.create(
                user1=request.user,
                user2=User.objects.filter(pk=data['swipedUser'])[0],
                Mdate=(date.today())
            )
            newmatch.save()
            return Response("match made")



class NewsPost(APIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    parser_classes= [MultiPartParser, FormParser]
    
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        permitted2=Matches.objects.filter(user1=num).values('user2')
        permitted3=Matches.objects.filter(user2=num).values('user1')
        fo=User.objects.filter(Q(pk=num) | Q(pk__in=permitted2.values('user2')) | Q(pk__in=permitted3.values('user1')))
        
        fobjs=NewsFeed.objects.filter(Q(owner__in=fo))
        detail = [ {"photo": detail.img.url, "date": naturaltime(detail.createdAt) , "userId": detail.owner.pk, "desc": detail.caption,"opic":(Details.objects.filter(owner=detail.owner.pk)[0]).profileImg.url,"fname":(Details.objects.filter(owner=detail.owner.pk)[0]).firstName+" "+(Details.objects.filter(owner=detail.owner.pk)[0]).lastName }
        for detail in fobjs.all()]
        return Response(detail)
    def post(self, request,*args,**kwargs):
        num=request.user.pk
        data=request.data
        serializer=PostSerializer(data=data)
        data._mutable=True
        data['owner']=num
        data['createdAt']=datetime.now()
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
            #print("swiped right: "+data['swipedUser'])
            return Response(serializer.data)



class ScheduleView(APIView):
    serializer_class=InviteSerializer
    parser_classes= [MultiPartParser,FormParser,JSONParser]
    permission_classes = [IsAuthenticated]
    def get(self,request,*args,**kwargs):
        num=request.user.pk
        print(datetime.today())
        
        det = [ {"finished": det.finished,"date":det.date ,"time":det.time,"sentTo":"katrina", "dateTime":det.dateTime,"day":(det.dateTime).weekday()}
        for det in Invite.objects.all()]
        
        return Response(det)
    def post(self, request,*args,**kwargs):
        num=request.user.pk
        data=request.data
        serializer=InviteSerializer(data=data)
        data._mutable=True
        data['sentBy']=num
        obj=User.objects.filter(username=data.name)[0]
        data['sentTo']=obj.pk
        data['accepted']=False
        data['finished']=False
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
            #print("swiped right: "+data['swipedUser'])
            return Response(serializer.data)

    