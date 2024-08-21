from django.db import models

class Media(models.Model):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    description = models.TextField()
    rating = models.FloatField()
    imagePath = models.CharField(max_length=200)
    mediaType = models.CharField(max_length=100)

    def __str__(self):
        return self.title
