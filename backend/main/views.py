import logging

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import OutstandingToken
from rest_framework_simplejwt.views import TokenViewBase
from . import serializer
from rest_framework import generics, permissions, pagination, viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models
from . import serializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import JsonResponse, response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import jwt , datetime
import re
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


class MyTokenObtainPairSerializer(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = serializer.MyTokenObtainPairSerializer


class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializer.ProductSerializer
    pagination_class = pagination.LimitOffsetPagination


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializer.ProductSerializer


@csrf_exempt
def order(request):
    first_name = request.POST.get('first_name_eng')
    last_name = request.POST.get('last_name_eng')
    company_name = request.POST.get('company_name')
    mobile_number_portfolio = request.POST.get('mobile_number_portfolio')
    website_link = request.POST.get('website_link')
    instagram_id = request.POST.get('instagram_id')
    telegram_id = request.POST.get('telegram_id')
    x_id = request.POST.get('x_id')
    card_number = request.POST.get('card_number')
    sheba_number = request.POST.get('sheba_number')
    address_portfolio = request.POST.get('address_portfolio')
    location_link = request.POST.get('location_link')
    card_color = request.POST.get('card_color')
    card_quantity = request.POST.get('card_quantity')
    product = request.POST.get('product')
    email = request.POST.get('email')
    username = request.POST.get('username')
    
    
    try:
        name_pattern = r'^[A-Za-z\s]{1,30}$'
        company_pattern = r'^[A-Za-z0-9\s]{1,50}$'
        mobile_number_pattern = r'^\d{11}$'
        website_pattern = r'^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$'
        instagram_pattern = r'^[a-zA-Z0-9._]{1,30}$'
        telegram_pattern = r'^[a-zA-Z0-9._]{1,30}$'
        x_id_pattern = r'^[a-zA-Z0-9._]{1,30}$'
        card_number_pattern = r'^\d{16}$'
        sheba_number_pattern = r'^IR\d{24}$'
        address_pattern = r'^.{1,100}$'
        location_link_pattern = r'^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$'
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        username_pattern = r'^[a-zA-Z0-9._]{5,20}$'

        if re.match(name_pattern, first_name) and re.match(name_pattern, last_name) and \
            re.match(company_pattern, company_name) and re.match(mobile_number_pattern, mobile_number_portfolio) and \
            re.match(website_pattern, website_link) and re.match(instagram_pattern, instagram_id) and \
            re.match(telegram_pattern, telegram_id) and re.match(x_id_pattern, x_id) and \
            re.match(card_number_pattern, card_number) and re.match(sheba_number_pattern, sheba_number) and \
            re.match(address_pattern, address_portfolio) and re.match(location_link_pattern, location_link) and \
            re.match(email_pattern, email) and re.match(username_pattern, username):
            pass
        else:
            # Invalid input
            return JsonResponse({'error': 'Invalid username format'}, status=400)

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
def MyOrderListView(request):
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
        
        # payload ={
        #     'id':user.id,
        #     'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        #     'iat': datetime.datetime.utcnow()
        # }
        
        # token = jwt.encode(payload, 'secret', algorithm='HS256')
        customer = models.Customer.objects.get(user=user)
        data = {
            'bool':True,
            # 'token':token,
            'first_name':user.first_name,
            'last_name':user.last_name,
            'email': customer.email,
            'mobile':customer.mobile
        }
        msg = JsonResponse(data)
        # msg.set_cookie(key='jwt', value=token, httponly=True)
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


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = serializer.MyTokenObtainPairSerializer
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    user = request.user
    specific_customer = models.Customer.objects.get(user=user)
    serializer_class = serializer.CustomerSerializers(specific_customer, many=False)
    return Response(serializer_class.data)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)