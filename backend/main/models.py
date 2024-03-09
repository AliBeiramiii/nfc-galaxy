from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=100,default='')
    description = models.TextField(default='')
    color = models.CharField(max_length=20,default='')
    price = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    image = models.ImageField(upload_to='product_images/',null=True)
    
    def __str__(self):
        return self.name
    

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
    youtube_link = models.CharField(max_length=200,default='',blank=True)
    linkedIn_id = models.CharField(max_length=200,default='',blank=True)
    whatsApp_id = models.CharField(max_length=200,default='',blank=True)
    facebook_id = models.CharField(max_length=200,default='',blank=True)
    ita_id = models.CharField(max_length=200,default='',blank=True)
    snapchat_id = models.CharField(max_length=200,default='',blank=True)
    roobika = models.CharField(max_length=200,default='',blank=True)
    instagram_id = models.CharField(max_length=200,default='',blank=True)
    telegram_id = models.CharField(max_length=200,default='',blank=True)
    x_id = models.CharField(max_length=200,default='',blank=True)
    card_number = models.PositiveBigIntegerField(null=True,blank=True)
    sheba_number = models.PositiveBigIntegerField(null=True,blank=True)
    visaCard_number = models.PositiveBigIntegerField(null=True,blank=True)
    payPal_number = models.PositiveBigIntegerField(null=True,blank=True)
    mastecard_number = models.PositiveBigIntegerField(null=True,blank=True)
    address_portfolio = models.TextField(default='',blank=True)
    image_portfolio = models.ImageField(upload_to="portfolio-picture",null=True,blank=True)
    CV_portfolio = models.FileField(upload_to="cv-portfolio",null=True,blank=True)
    location_link = models.TextField(default='',blank=True)
    card_NO = models.IntegerField(null=True)
    portfolio_views = models.IntegerField(null=True) 
    
    def __str__(self):
        return self.customer.user.username + str(self.id)   
    
    

class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.SET_NULL,null=True,blank=True)
    phone_number = models.CharField(max_length=15,null=True)
    address = models.TextField(null=True)
    postal_code = models.CharField(max_length=20,null=True)
    company_name = models.CharField(max_length=200,blank=True)
    complete = models.BooleanField(default=False)
    date_ordered = models.DateTimeField(auto_now_add=True)
    transaction_id = models.CharField(max_length=100,null=True)
    
    def __str__(self):
        return str(self.id)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    portfolio = models.ForeignKey(Portfolio, on_delete=models.SET_NULL,null=True, blank=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.IntegerField(null=True)
    

