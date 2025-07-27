from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Divaastra Backend Running 🚀</h1>")
