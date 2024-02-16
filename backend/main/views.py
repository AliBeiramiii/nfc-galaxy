import logging
from . import serializer
from rest_framework import generics, permissions, pagination, viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models

from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import JsonResponse, response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import jwt , datetime
import re


class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializer.ProductSerializer
    pagination_class = pagination.LimitOffsetPagination

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializer.ProductSerializer
  

class MyOrderListView(APIView):
    def get(self, request):
        username = request.POST.get('username')
        if not re.match(r'^[a-zA-Z0-9_]+$', username):
            return JsonResponse({'error': 'Invalid username format'}, status=400)
        user = User.objects.get(username=username)
        orders = models.Order.objects.filter(user=user)
        serializer_class = serializer.OrderSerializer(orders, many=True)
        return Response(serializer_class.data)


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
        customer = models.Customer.objects.get(user=user)
        data = {
            'bool':True,
            'token':token,
            'first_name':user.first_name,
            'last_name':user.last_name,
            'email': customer.email,
            'mobile':customer.mobile
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
    return msg
               
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
            username = username,
            password = password,
        )
        if not re.match(r'^[a-zA-Z0-9_]+$', username):
            return JsonResponse({'error': 'Invalid username format'}, status=400)
        if not re.match(r'^[a-zA-Z0-9_]+$', password) :
            return JsonResponse({'error': 'Invalid password format'}, status=400)
        if not re.match(r'^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]+$', email):
            return JsonResponse({'error': 'Invalid email format'}, status=400)

        if user:
            try:
                customer = models.Customer.objects.create(
                    user = user,
                    mobile = mobile,
                    email  = email
                )
                msg = {
                    'bool':True,
                    'user':user.id,
                    'customer':customer.id,
                    'msg':'thank you for your registration. You can log in now'
                }
            except IntegrityError:
                user.delete()
                msg = {
                'bool':False,
                'msg':'Phone number or email number already exist'
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
def customer_change_info(request):
    old_username = request.POST.get('old_username')
    new_username = request.POST.get("new_username")
    new_email = request.POST.get("email")
    new_first_name = request.POST.get("first_name")
    new_last_name = request.POST.get("last_name")
    new_mobile = request.POST.get("mobile")
    user = authenticate(username=old_username)
    
    if not re.match(r'^[a-zA-Z0-9_]+$', old_username):
        return JsonResponse({'error': 'Invalid username format'}, status=400)
    if not re.match(r'^[a-zA-Z0-9_]+$', new_username):
        return JsonResponse({'error': 'Invalid username format'}, status=400)
    if not re.match(r'^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]+$', new_email):
        return JsonResponse({'error': 'Invalid email format'}, status=400)

    try:
        user = User.objects.get(username=old_username)
        customer = models.Customer.objects.get(user=user)
    except models.Customer.DoesNotExist:
        return JsonResponse({"error": "Model instance not found","test":old_username}, status=status.HTTP_404_NOT_FOUND)

    try:
        user.username = new_username
        user.first_name = new_first_name,
        user.last_name = new_last_name,
        customer.email = new_email
        customer.mobile = new_mobile
        
        user.save()
        customer.save()
    except:         
        return JsonResponse({"error": "error editing files"})

    return JsonResponse({"success": "Model instance updated"}, status=status.HTTP_200_OK)
    
@csrf_exempt
def customer_reset_password(request):
    
    username = request.POST.get("username")
    old_password = request.POST.get('old_password')
    new_password = request.POST.get("new_password")

    if not re.match(r'^[a-zA-Z0-9_]+$', username):
        return JsonResponse({'error': 'Invalid username format'}, status=400)
    if not re.match(r'^[a-zA-Z0-9_]+$', old_password):
        return JsonResponse({'error': 'Invalid username format'}, status=400)
    if not re.match(r'^[a-zA-Z0-9_]+$', new_password):
        return JsonResponse({'error': 'Invalid username format'}, status=400)
    
    try:
        user = authenticate(username=username, password=old_password)
    except models.User.DoesNotExist:
        return JsonResponse({"error": "Model instance not found"}, status=status.HTTP_404_NOT_FOUND)

    try:
        if user:
            user.set_password(new_password)
            user.save()
        else:
            return JsonResponse({"error": "Wrong password","test":username+" "+old_password+" "+new_password}, status=status.HTTP_401_UNAUTHORIZED)
            
    except:         
        return JsonResponse({"error": "error editing files"})

    return JsonResponse({"success": "Model instance updated"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_portfolio_fields(username):
    # model_fields = models.Portfolio._meta.get_fields()
    user = User.objects.get(username=username)
    model_instance = models.Portfolio.objects.filter(user=user)
    serializer_class= serializer.PortfolioSerializer(model_instance, many=True)
    return JsonResponse(serializer_class.data)