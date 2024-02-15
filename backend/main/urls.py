from django.urls import path
from . import views
from rest_framework import routers


router = routers.SimpleRouter()
router.register('address', views.CustomerAddressViewSet)

urlpatterns = [
    path('vendors/',views.VendorList.as_view()),
    path('vendor/<int:pk>',views.VendorDetail.as_view()),
    
    path('products/',views.ProductList.as_view()),
    path('product/<int:pk>',views.ProductDetail.as_view()),
    
    path('customers/',views.CustomerList.as_view()),
    path('customer/<int:pk>',views.CustomerDetail.as_view()),
    
    path('customer/login/',views.customer_login, name='customer_login'),
    path('customer/register/',views.customer_register, name='customer_register'),
    # path('customer/change-info/',views.)
    
    path('orders/',views.OrderList.as_view()),
    path('order-detail/<int:pk>',views.OrderDetail.as_view()),
    
    path('customer/dashboard/',views.get_portfolio_fields),
    
    path('customer/change_info/',views.customer_change_info, name='customer-edit-info'),

    path('customer/reset-password/',views.customer_reset_password, name='customer-reset-password')
    
]
urlpatterns += router.urls