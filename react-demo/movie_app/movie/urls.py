from django.conf.urls import url, include
from rest_framework import routers
from movie.views import MovieViewSet


router = routers.SimpleRouter()
router.register(r'movies', MovieViewSet, basename='movies')

urlpatterns = [
    url(r'', include(router.urls))
]
