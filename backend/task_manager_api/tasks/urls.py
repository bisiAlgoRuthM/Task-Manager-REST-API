from django.urls import path
from .views import TaskListCreateView, TaskDetailView, CategoryListCreateView, CategoryDetailView, get_tasks_list, get_category_list
urlpatterns = [
    path('tasklist/', get_tasks_list),
    path('categorylist/', get_category_list),
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('task/<int:pk>', TaskDetailView.as_view(), name='task-detail'),
    path('category/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('category/<int:pk>', CategoryDetailView.as_view(), name='category-detail')
]