from django.urls import path
from . import views
from rest_framework import routers


urlpatterns = [
    
    path('customer/dashboard/',views.get_portfolio_fields),
    
    path('customer/change_info/',views.customer_change_info, name='customer-edit-info'),

    path('customer/reset-password/',views.customer_reset_password, name='customer-reset-password'),
    
    path('customer/login/',views.customer_login, name='customer_login'),
    
    path('customer/register/',views.customer_register, name='customer_register'),
    
    path('customer/change-info/',views.customer_change_info)
    
]