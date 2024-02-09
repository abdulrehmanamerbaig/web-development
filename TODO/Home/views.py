from django.shortcuts import render, HttpResponse, redirect, get_object_or_404, get_list_or_404
from Home.models import TODO
from django.contrib.auth.decorators import login_required
from django.template import loader

def task_status(tasks):
    pending = 0
    completed = 0
    high_priority = 0
    middle_priority = 0
    low_priority = 0
    
    for x in tasks:
        if not x.task_status:
            pending += 1
        else:
            completed += 1
        if x.task_priority == 'High Priority':
            high_priority += 1
        elif x.task_priority == 'Medium Priority':
            middle_priority += 1
        elif x.task_priority == 'Low Priority':
            low_priority += 1
    
    return [completed,pending,high_priority,middle_priority,low_priority]

def account_access(request):
    return render(request, 'accounts_access.html')

@login_required(login_url='/account')
def todo(request):
    # return HttpResponse(' TO DO')
    allTask = TODO.objects.filter(user=request.user)
    
    
    status = task_status(allTask)
        
    
    
    
    context = {
                'tasks': allTask,
                'name': request.user,
                        'completed':status[0],
                        'not_completed':status[1],
                        'high_priority':status[2],
                        'middle_priority': status[3],
                        'low_priority':status[4],
                        'asc_priority': False,
    'asc_tasks': False}

    if request.method == 'POST':
        
        title = request.POST.get('title')
        description = request.POST.get('description')
        priority = request.POST.get('priority')
        if title:
            todo = TODO(task_title=title, task_description=description, task_priority = priority, user = request.user)
            todo.save()
            context = {'success': True,
                       'name': request.user}
            allTask = TODO.objects.filter(user=request.user)
            context = {
                'tasks': allTask,
                'name': request.user,
                        'completed':status[0],
                        'not_completed':status[1],
                        'high_priority':status[2],
                        'middle_priority': status[3],
                        'low_priority':status[4],
                        'asc_priority': False,
    'asc_tasks': False}
            return redirect('/', context)
            
    return render(request, 'index.html', context)

@login_required(login_url='/account')

def delete_task(request, task_id):
    
    task = TODO.objects.get(pk = task_id)
    task.delete()
    return redirect('/')
    # return HttpResponse('D E L E T E - T A S K')

@login_required(login_url='/account')

def update_task(request, task_id):
    task =  get_object_or_404(TODO, user = request.user, pk=task_id)
    context = {'task': task,
               'asc_priority': False,
    'asc_tasks': False}
    
    if request.method == "POST":
        task.task_title = request.POST.get('title')
        task.task_description = request.POST.get('description')
        
        task.task_priority = request.POST.get('priority')
        task.save()
        
        
        return redirect('/')
        
    return render(request,'update_task.html', context)

@login_required(login_url='/account')

def update_status(request, task_id):
    task =  get_object_or_404(TODO, user = request.user, pk=task_id)
    task.task_status = not task.task_status
    task.save()
    return redirect('/')
    
@login_required(login_url='/account')

def sort_task_names(request):
    allTask = TODO.objects.filter(user=request.user).order_by('task_title')
    template = loader.get_template('index.html')
    status = task_status(allTask)
    context = {
    'tasks': allTask,
    'name': request.user,
    'asc_priority': False,
    'asc_tasks': True,
    'completed':status[0],
                        'not_completed':status[1],
                        'high_priority':status[2],
                        'middle_priority': status[3],
                        'low_priority':status[4],
    }
    return HttpResponse(template.render(context, request))

@login_required(login_url='/account')

def sort_task_names_desc(request):
    allTask = TODO.objects.filter(user=request.user).order_by('-task_title')
    template = loader.get_template('index.html')
    status = task_status(allTask)
    
    context = {
    'tasks': allTask,
    'name': request.user,
    'asc_priority': False,
    'asc_tasks': False,
    'completed':status[0],
                        'not_completed':status[1],
                        'high_priority':status[2],
                        'middle_priority': status[3],
                        'low_priority':status[4],
    }
    return HttpResponse(template.render(context, request))

@login_required(login_url='/account')

def sort_priority(request):
    custom_priority_order = {
        'High Priority': 1,
        'Medium Priority': 2,
        'Low Priority': 3,
    }

    allTask = TODO.objects.filter(user=request.user)
    sorted_tasks = sorted(allTask, key=lambda x: custom_priority_order.get(x.task_priority))

    status = task_status(allTask)

    context = {
        'tasks': sorted_tasks,
        'name': request.user,
        'asc_priority': True,
    'asc_tasks': False,
    'completed':status[0],
                        'not_completed':status[1],
                        'high_priority':status[2],
                        'middle_priority': status[3],
                        'low_priority':status[4],
    }

    return render(request, 'index.html', context)
    
@login_required(login_url='/account')

def sort_priority_desc(request):
    custom_priority_order = {
        'High Priority': 3,
        'Medium Priority': 2,
        'Low Priority': 1,
    }

    allTask = TODO.objects.filter(user=request.user)
    sorted_tasks = sorted(allTask, key=lambda x: custom_priority_order.get(x.task_priority))

    status = task_status(allTask)

    context = {
        'tasks': sorted_tasks,
        'name': request.user,
        'asc_priority': False,
    'asc_tasks': False,
    'completed':status[0],
                        'not_completed':status[1],
                        'high_priority':status[2],
                        'middle_priority': status[3],
                        'low_priority':status[4],
    }

    return render(request, 'index.html', context)

@login_required(login_url='/account')

def search_task(request):
    
       
    if request.method == "POST":

        title = request.POST.get('search_input')
        try:
            x = TODO.objects.filter(user = request.user, task_title = title)
            completed = 0
            pending = 0
            high_priority = 0
            middle_priority = 0
            low_priority = 0
            if x.exists():
            
                for task in x:
                    if task.task_status:
                        completed += 1
                    else:
                        pending += 1
                    if task.task_priority == 'High Priority':
                        high_priority += 1
                    elif task.task_priority == 'Middle Priority':
                        middle_priority += 1
                    elif task.task_priority == 'Low Priority':
                        low_priority += 1
                context = {
                            'task_title': x,
                            'found' : True,
                            'completed':completed,
                        'not_completed':pending,
                        'high_priority':high_priority,
                        'middle_priority': middle_priority,
                        'low_priority':low_priority,
                        'input_val': title
                            } 
                print (context)
                return render(request, 'search.html', context)
            else:
                x = TODO.objects.get(task_title = title)
                context = {
                            'task_title': x,
                            'found' : True,
                            'input_val': title
                            } 
                print (context)
                return render(request, 'search.html', context)
                
            
        except:
            context = {
                'task_title': 'No such Task has been inserted',
                'found' : False,
                'input_val': title
            }
            print (context)
            
            return render(request, 'search.html', context)
            
    
    return render(request, 'search.html')


@login_required(login_url='/account')

def sort_priority_search(request, task_title):
    # return HttpResponse(task_title)
    
    custom_priority_order = {
        'High Priority': 1,
        'Medium Priority': 2,
        'Low Priority': 3,
    }
    # print ( task_title)
    try:
        obj = get_list_or_404(TODO, user = request.user, task_title = task_title)
        obj = sorted(obj, key=lambda x: custom_priority_order.get(x.task_priority))
        completed = 0
        pending = 0
        high_priority = 0
        middle_priority = 0
        low_priority = 0
        for task in obj:
            if task.task_status:
                completed += 1
            else:
                pending += 1
            if task.task_priority == 'High Priority':
                high_priority += 1
            elif task.task_priority == 'Medium Priority':
                middle_priority += 1
            elif task.task_priority == 'Low Priority':
                low_priority += 1
        
        
        context = {
            'task_title': obj,
            'found': True,
            'asc_priority': True,
        'completed':completed,
                    'not_completed':pending,
                    'high_priority':high_priority,
                    'middle_priority': middle_priority,
                    'low_priority':low_priority,
                            'input_val': task_title
        }
        return render(request, 'search.html', context)
    except:
        context = {
            'task_title': 'NO OBJECT',
            'found': False
        
        }
        return render(request, 'search.html', context)
        
    

    
@login_required(login_url='/account')
def sort_priority_desc_search(request, task_title):
    # return HttpResponse(task_title)
    custom_priority_order = {
        'High Priority': 3,
        'Middle Priority': 2,
        'Low Priority': 1,
    }
    completed = 0
    pending = 0
    high_priority = 0
    middle_priority = 0
    low_priority = 0
    obj = get_list_or_404(TODO, task_title = task_title)
    obj = sorted(obj, key=lambda x: custom_priority_order.get(x.task_priority))
    for task in obj:
        if task.task_status:
            completed += 1
        else:
            pending += 1
        if task.task_priority == 'High Priority':
            high_priority += 1
        elif task.task_priority == 'Middle Priority':
            middle_priority += 1
        elif task.task_priority == 'Low Priority':
            low_priority += 1
            
    context = {
        'task_title': obj,
        'found': True,
        'completed':completed,
                'not_completed':pending,
                'high_priority':high_priority,
                'middle_priority': middle_priority,
                'low_priority':low_priority,
                        'input_val': task_title,
                
        'asc_priority': False,
    }

    return render(request, 'search.html', context)

@login_required(login_url='/account')

def about(request):
    # return HttpResponse(' TO DO')
    allTask = TODO.objects.filter(user=request.user)
    completed = 0
    pending = 0
    high_priority = 0
    middle_priority = 0
    low_priority = 0
    for task in allTask:
        if task.task_status:
            completed += 1
        else:
            pending += 1
        if task.task_priority == 'High Priority':
            high_priority += 1
        elif task.task_priority == 'Middle Priority':
            middle_priority += 1
        elif task.task_priority == 'Low Priority':
            low_priority += 1
    context = {
        'tasks': allTask,
        'name': request.user,
        'completed':completed,
                'not_completed':pending,
                'high_priority':high_priority,
                'middle_priority': middle_priority,
                'low_priority':low_priority,
        
    }
    # for x in allTask: 
    #     print(x.task_title)
    #     print (x.task_description)
    #     print ()
    return render(request, 'about.html', context)

