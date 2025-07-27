from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def base(request):
    return render(request, 'base.html')

def programacao(request):
    return render(request, 'programacao.html')

def sobre(request):
    return render(request, 'sobre.html')
# Create your views here.
