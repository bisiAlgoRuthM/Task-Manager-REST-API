from django.test import TestCase
from .models import Task, Category
from datetime import date

# Create your tests here.
class TaskModelTestCase(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Test Category')

    def test_task_creation(self):
        #Test that a task can be created and saved
        task = Task.objects.create(
            title='Test Task',
            description = 'This is a test task',
            category = self.category,
            due_date=date(2024, 12, 31),
            priority=1
            )
        
        saved_task = Task.objects.get(id=task.id)

        #Asssertions to check if data was saved
        self.assertEqual(saved_task.title, 'Test Task')
        self.assertEqual(saved_task.description, 'This is a test task')
        self.assertEqual(saved_task.category, self.category)
        self.assertEqual(saved_task.due_date, date(2024, 12, 31))
        self.assertEqual(saved_task.priority, 1)

    def test_task_str_method(self):
        task = Task.objects.create(
                title='Test Task',
                description = 'This is a test task',
                category = self.category,
                due_date = date(2024, 12, 31),
                priority=1)

        self.assertEqual(str(task.title), 'Test Task')