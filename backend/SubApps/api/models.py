from django.db import models


# Create your models here.
class Birthday(models.Model):
    name = models.CharField(max_length=30)
    date = models.CharField(max_length=30)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name