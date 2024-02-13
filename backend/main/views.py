import logging
from . import serializer
from rest_framework import generics, permissions, pagination, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models

from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import jwt , datetime
import re


class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializer.VendorSerializers
    # permission_classes = [permissions.IsAuthenticated]

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializer.VendorDetailSerializers
    # permission_classes = [permissions.IsAuthenticated]


class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializer.ProductListSerializers
    pagination_class = pagination.LimitOffsetPagination

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializer.ProductDetailSerializers
  
    
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializer.CustomerSerializers
    # permission_classes = [permissions.IsAuthenticated]

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializer.CustomerDetailSerializers
    # permission_classes = [permissions.IsAuthenticated]


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializer.OrderSerializers
    # permission_classes = [permissions.IsAuthenticated]
    
class OrderDetail(generics.ListAPIView):

    serializer_class = serializer.OrderDeatailSerializers
    
    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItem.objects.filter(order=order)
        return order_items
    # permission_classes = [permissions.IsAuthenticated]

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializer.CustomerAddressSerializers
    queryset = models.CustomerAdddress.objects.all()

# @api_view(('POST',))
# @renderer_classes((TemplateHTMLRenderer, JSONRenderer))

@csrf_exempt
def customer_login(request):
    username = request.POST.get("username")
    password = request.POST.get("password")
    if not re.match(r'^[a-zA-Z0-9_]+$', username):
            return JsonResponse({'error': 'Invalid username format'}, status=400)
    if not re.match(r'^[a-zA-Z0-9_]+$', password) :
            return JsonResponse({'error': 'Invalid password format'}, status=400)
    
    user = authenticate(username=username, password=password)
    
    if user:
        
        payload ={
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        
        data = {
            'bool':True,
            'token':token,
        }
        msg = JsonResponse(data)
        msg.set_cookie(key='jwt', value=token, httponly=True)
    else:
        data = {
            'bool':False,
            'test':username,
            'msg':'نام کاربری یا رمز عبور اشتباه است.'
        }  
        msg = JsonResponse(data=data)
    logging.debug(msg)
    return msg
    # username = request.POST.get("username")
    # password = request.POST.get("password")
    # user = authenticate(username=username, password=password)
    # if user:
    #     msg = {
    #         'bool':True,
    #         'user':user.username
    #     }
    # else:
    #     msg = {
    #         'bool':False,
    #         'test':username,
    #         'test2':password,
    #         'msg':'نام کاربری یا رمز عبور اشتباه است.'
    #     }  
    # return JsonResponse(msg)

# class LoginView(APIView):
#     @csrf_exempt
#     def post(request):
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         return Response({
#             'message':'hi'
#         })
        
        
        
@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('firstName')
    last_name = request.POST.get('lastName')
    email = request.POST.get('email')
    username = request.POST.get('username')
    password = request.POST.get('password')
    mobile = request.POST.get('mobileNumber')
    try:
        user = User.objects.create_user(
            first_name = first_name,
            last_name = last_name,
            email = email,
            username = username,
            password = password,
        )
        if user:
            try:
                customer = models.Customer.objects.create(
                    user = user,
                    mobile = mobile
                )
                msg = {
                    'bool':True,
                    'user':user.id,
                    'customer':customer.id,
                    'msg':'thank you for your registration. You can log in now'
                }
            except IntegrityError:
                msg = {
                'bool':False,
                'msg':'Phone number already exist'
            }  
        else:
            msg = {
                'bool':False,
                'msg':'Ops... something went wrong'
            }  
    except IntegrityError:
        msg = {
                'bool':False,
                'msg':'This username is already created',
            }  
        
    return JsonResponse(msg)


@csrf_exempt
def customer_login(request):
    username = request.POST.get("username")
    email = request.POST.get("email")
    first_name = request.POST.get("first_name")
    last_name = request.POST.get("last_name")
    mobile = request.POST.get("mobile")
    user = authenticate(username=username)
    
    if user:
        
        payload ={
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        
        data = {
            'bool':True,
            'token':token,
        }
        msg = JsonResponse(data)
        msg.set_cookie(key='jwt', value=token, httponly=True)
    else:
        data = {
            'bool':False,
            'test':username,
            'msg':'نام کاربری یا رمز عبور اشتباه است.'
        }  
        msg = JsonResponse(data=data)
    logging.debug(msg)
    return msg