from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from movie.serializers import MovieSerializer
from movie.models import Movie


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = {
        'title': ['icontains'],
        'imdb_rating': ['exact']
    }

    def filter_queryset(self, *args, **kwargs):
        queryset = super().filter_queryset(*args, **kwargs)

        if self.request.query_params.get('imdb_rating', None) == '':
            queryset = queryset.filter(imdb_rating=None)
        return queryset
