from rest_framework import serializers
from . import models


class BirthdaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Birthday
        fields = ('id', 'name', 'date', 'note')
