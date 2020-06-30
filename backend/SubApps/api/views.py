from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BirthdaySerializer
from .models import Birthday


class BirthdayViewSet(viewsets.ModelViewSet):
    queryset = Birthday.objects.all().order_by('id')
    serializer_class = BirthdaySerializer


# Create your views here.
