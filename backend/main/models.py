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
    name = models.CharField(max_length=100,default='')
    description = models.TextField(default='')
    price = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    image = models.ImageField(upload_to='product_images/',null=True)


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


class CustomerAdddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    address = models.TextField()
    default_address = models.BooleanField(default=True)
    def __str__(self):
        return self.address
    
    
class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200,null=True)
    phone_number = models.CharField(max_length=15,null=True)
    address = models.TextField(null=True)
    postal_code = models.CharField(max_length=20,null=True)
    products = models.ManyToManyField(Product, through='OrderItem')
    total_price = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=True)
