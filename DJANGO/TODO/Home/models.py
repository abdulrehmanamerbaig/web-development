from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class TODO(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    task_title = models.CharField(max_length=30)
    task_description = models.TextField()
    task_priority = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
    task_status = models.BooleanField(default=False)
    def __str__(self) -> str:
        return self.task_title
    