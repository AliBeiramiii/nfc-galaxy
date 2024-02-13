from django.db import models
from django.contrib.auth.models import User

class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)
    def __str__(self):
        return self.user.username
        
    
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    
    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True)
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()
    
    def __str__(self):
        return self.title


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    email = models.EmailField(max_length = 254, default='example@example.com', unique=True)

    def __str__(self):
        return self.user.username
    

class Portfolio(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,null=True, default=None)
    first_name_eng = models.CharField(max_length=200)
    last_name_eng = models.CharField(max_length=200)
    company_name = models.CharField(max_length=200,default='',blank=True)
    mobile_number_portfolio = models.PositiveBigIntegerField(null=True,blank=True)
    website_link = models.CharField(max_length=200,default='',blank=True)
    instagram_id= models.CharField(max_length=200,default='',blank=True)
    telegram_id = models.CharField(max_length=200,default='',blank=True)
    x_id = models.CharField(max_length=200,default='',blank=True)
    card_number = models.PositiveBigIntegerField(null=True,blank=True)
    sheba_number = models.PositiveBigIntegerField(null=True,blank=True)
    address_portfolio = models.TextField(default='',blank=True)
    image_portfolio = models.ImageField(upload_to="portfolio-picture",null=True,blank=True)
    CV_portfolio = models.FileField(upload_to="cv-portfolio",null=True,blank=True)
    location_link = models.TextField(default='',blank=True)
    card_NO = models.IntegerField(null=True)
    portfolio_views = models.IntegerField(null=True)

    
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add = True)
    

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class CustomerAdddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    address = models.TextField()
    default_address = models.BooleanField(default=True)
    def __str__(self):
        return self.address
    
    
# class ProductRating(models.Model):
#     # customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
#     rating = models.IntegerField()
#     reviews = models.TextField()
#     add_time = models.DateTimeField( auto_now_add=True)
    
#     def __str__(self):
#         return f'{self.rating} - {self.reviews}'    
