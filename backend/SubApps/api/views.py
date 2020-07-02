from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import BirthdaySerializer
from .models import Birthday

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def BirthdayList(request):
    if request.method == 'GET':
        queryset = Birthday.objects.all().order_by('id')
        serializer = BirthdaySerializer(queryset, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BirthdaySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create your views here.
