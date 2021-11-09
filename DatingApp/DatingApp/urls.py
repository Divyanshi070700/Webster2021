from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from core.views import *
from UserHandler.views import *
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
	path('admin/', admin.site.urls),
	path('wel/', ReactView.as_view(), name="something"),
     #path('auth/', include('Accounts.urls')),
     #url(r'^rest-auth/', include('rest_auth.urls'))
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url('details/user/',DetailView.as_view(),name="hello")
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)