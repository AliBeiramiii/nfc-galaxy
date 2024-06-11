from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views



urlpatterns = [
    
    path('customer/reset-password/',views.customer_reset_password, name='customer-reset-password'),
    
    path('customer/login/',views.customer_login, name='customer_login'),
    
    path('customer/register/',views.customer_register, name='customer_register'),
    
    path('customer/change-info/',views.customer_change_info),
    
    path('customer/get-my-order-list/',views.MyOrderListView),

    path('customer/portfolio/<str:name>',views.get_portfolio_fields ),
    
    path('token/', 
          views.MyTokenObtainPairSerializer.as_view(), 
          name ='token_obtain_pair'),
     path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name ='token_refresh'),
     path('dashboard/', views.get_profile),
     
     path('homepage/', views.get_profile),
     
     path('customer/logout/', views.LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='logout'),
    
     path('set-portfolio/', views.set_portfolio_fields),
     
]