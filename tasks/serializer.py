"""
Archivo: serializer.py

Descripción: Define el serializador TaskSerializer que convierte objetos del modelo Task
a formato JSON y viceversa para la comunicación con el frontend a través de la API REST.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Serializa y deserializa los datos de las tareas para la API. Permite convertir
instancias del modelo Task a JSON (para enviar al frontend) y convertir JSON a instancias
del modelo (para crear/actualizar tareas desde el frontend).

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.
"""
from rest_framework import serializers
from .models import Task
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
