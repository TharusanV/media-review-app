from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Media
from .serializers import MediaSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to the Media Review API!")

class MediaListCreate(generics.ListCreateAPIView):
    serializer_class = MediaSerializer

    def get_queryset(self):
        queryset = Media.objects.all()
        media_type = self.request.query_params.get('mediaType')
        if media_type:
            queryset = queryset.filter(mediaType=media_type)
        return queryset

    def post(self, request):
        serializer = MediaSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class MediaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer