# Generated by Django 4.2.3 on 2023-08-10 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0003_alter_todo_task_priority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='task_priority',
            field=models.TextField(),
        ),
    ]
