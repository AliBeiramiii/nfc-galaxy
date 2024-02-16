from rest_framework import serializers
from rest_framework.fields import empty
from . import models


class VendorSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.Vendor
        fields = ['id', 'user', 'address']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(VendorSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1    

class VendorDetailSerializers(serializers.ModelSerializer):
    class Meta():
        model = models.Vendor
        fields = ['id', 'user', 'address']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1 
        
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"


        
        
class CustomerSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.Customer
        fields = ['id', 'user', 'mobile']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(CustomerSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1    

class CustomerDetailSerializers(serializers.ModelSerializer):
    class Meta():
        model = models.Customer
        fields = ['id', 'user', 'mobile']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializers, self).__init__(*args, **kwargs)
        self.Meta.depth = 1   


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    products = OrderItemSerializer(many=True)

    class Meta:
        model = models.Order
        fields = '__all__'


class CustomerAddressSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.CustomerAdddress
        fields = ['id', 'customer', 'address', 'default_address']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1 
        
        
class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Portfolio
        fields = '__all__'
        