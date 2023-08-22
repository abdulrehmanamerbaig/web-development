from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages

# Create your views here.


def register(request):
    # return HttpResponse('A C C O U N T S')
    if request.method == "POST":
        
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        email = request.POST['email']
        
        
        if password1 == password2:
            if not User.objects.filter(username=username).exists():
                    user = User.objects.create_user(username=username, password=password1, 
                                                    email=email)
                    user.save()
                    
            else:
                if User.objects.filter(username=username).exists():
                    messages.info(request, 'Username already exists')
                    return redirect('/register')
                return redirect('/register')
                
                
                
        else:
            messages.info(request, 'Password Does Not Match')
            return redirect('/accounts/register')
        return redirect('/login')
    else:   
        return render(request, 'registration.html')
    
def login(request):
    # return HttpResponse('L O G - I N')
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid Credentials')
            return redirect('/login')
        
    return render(request, 'login.html')

def logout(request):
    auth.logout(request)
    return redirect('/account')

def base2(request):
    return render(request, 'base2.html')