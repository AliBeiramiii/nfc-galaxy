"""
URL configuration for nfc_backend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))



http post http://127.0.0.1:8000/api/token/ username=root password=alibeirami

http post http://127.0.0.1:8000/api/vendors/ "Authorization: Baerer
your token in the last part"

http post http://127.0.0.1:8000/api/token/refresh/ refresh=your refresh token

"""
from django.contrib import admin
from django.urls import path, include
from azbankgateways.urls import az_bank_gateways_urls
from main.views import go_to_gateway_view,callback_gateway_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('bankgateways/', az_bank_gateways_urls()),
    path('go-to-gateway/', go_to_gateway_view),
    path('callback-gateway/',callback_gateway_view)
]
