"""
Archivo: views.py

Descripción: Define las vistas (ViewSets) de Django REST Framework para la API de tareas.
Implementa automáticamente las operaciones CRUD (Create, Read, Update, Delete) usando ModelViewSet.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Proporciona los endpoints de la API REST para gestionar tareas. El ModelViewSet
automáticamente crea los endpoints para listar, crear, obtener, actualizar y eliminar tareas.

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.
"""
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
