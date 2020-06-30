from django.db import models


# Create your models here.
class Birthday(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=30)
    date = models.DateField()
    note = models.TextField()

    def __str__(self):
        return self.name