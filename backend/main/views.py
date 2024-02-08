from . import serializer
from rest_framework import generics, permissions, pagination, viewsets
from . import models
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

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


@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        msg = {
            'bool':True,
            'user':user.username
        }
    else:
        msg = {
            'bool':False,
            'msg':'Invalid Username/Password!!'
        }  
    return JsonResponse(msg)


@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    user = User.objects.create(
        first_name = first_name,
        last_name = last_name,
        email = email,
        mobile = mobile,
        username = username,
        password = password,
    )
    if user:
        customer = models.Customer.objects.create(
            user = user,
            moblie = mobile,
        )
        msg = {
            'bool':True,
            'user':user.id,
            'customer':customer.id,
            'msg':'thank you for your registration. You can log in now'
        }
    else:
        msg = {
            'bool':False,
            'msg':'Ops... something went wrong'
        }  
    return JsonResponse(msg)
