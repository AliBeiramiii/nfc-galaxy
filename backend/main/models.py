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
    mobile = models.PositiveBigIntegerField()
    def __str__(self):
        return self.user.username
    

# class Portfolio(models.Model):
#     first_name_eng = models.CharField(max_length=200)
#     last_name_eng = models.CharField(max_length=200)
#     company_name = models.CharField(max_length=200)
#     mobile_portfolio = models.PositiveBigIntegerField()
#     website_link = models.TextField()
#     instagram_id= models.TextField()
#     telegram_id = models.TextField()
#     x_id = models.TextField()
#     card_number = models.PositiveBigIntegerField()
#     sheba_number = models.PositiveBigIntegerField()
#     address_portfolio = models.TextField()
#     image_portfolio = models.ImageField(upload_to="portfolio-picture")
#     CV_portfolio = models.FileField(upload_to="cv-portfolio")
#     location = models.TextField()
    
    
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
