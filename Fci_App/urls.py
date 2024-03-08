from django.urls import include, path

urlpatterns = [
    # path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    



]