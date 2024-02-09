from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from .models import Task, Category
from .serializers import TaskSerializer, CategorySerializer

class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

def get_category_list(request):
    #get all categories
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return JsonResponse(serializer.data, safe=False)

def get_tasks_list(request):
    #get all the tasks
    #serialize them
    #return them as json
    tasks = Task.objects.all()
    serializer =TaskSerializer(tasks, many=True)
    return JsonResponse(serializer.data, safe=False)

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer