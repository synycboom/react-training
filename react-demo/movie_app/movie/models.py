from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    storyline = models.TextField()
    imdb_rating = models.FloatField(null=True)
    posterurl = models.TextField()

    def __str__(self):
        return '{} {}'.format(self.title, self.imdb_rating)
