from rest_framework import serializers
from rest_framework.fields import empty
from . import models
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"


class CustomerSerializers(serializers.ModelSerializer): 
    class Meta():
        model = models.Customer
        fields = ['id', 'user', 'mobile','email', 'firstname','lastname']

class Customer2Serializers(serializers.ModelSerializer): 
    class Meta():
        model = models.Customer
        fields = ['id', 'user', 'firstname','lastname']

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


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token        