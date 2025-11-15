"""
Archivo: models.py

Descripción: Define el modelo de datos Task que representa una tarea en el sistema.
Contiene los campos: título, descripción y estado de completado.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Define la estructura de datos para las tareas que se almacenan en la base de datos.
Este modelo se utiliza por el ORM de Django para crear la tabla correspondiente
y por el serializador para convertir los datos a/desde JSON en la API REST.

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.
"""
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title

