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
        
        
class ProductListSerializers(serializers.ModelSerializer):
    class Meta():
        model = models.Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(ProductListSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1
       
class ProductDetailSerializers(serializers.ModelSerializer):
    # product_ratings = serializers.PrimaryKeyRelatedField(many=True, read_only= True)
    class Meta():
        model = models.Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1    
        
        
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


class OrderSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.Order
        fields = ['id', 'customer']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(OrderSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1 


class OrderDeatailSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.OrderItem
        fields = ['id', 'order', 'product']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(OrderDeatailSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1       


class CustomerAddressSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.CustomerAdddress
        fields = ['id', 'customer', 'address', 'default_address']
    
    #to showing data for each user
    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializers, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1 
        
        

        