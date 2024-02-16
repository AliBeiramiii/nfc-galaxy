from rest_framework import serializers
from rest_framework.fields import empty
from . import models

        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"


class CustomerSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.Customer
        fields = ['id', 'user', 'mobile','email']


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    products = OrderItemSerializer(many=True)

    class Meta:
        model = models.Order
        fields = '__all__'
        
        
class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Portfolio
        fields = '__all__'
        