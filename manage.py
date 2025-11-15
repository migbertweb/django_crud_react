#!/usr/bin/env python
"""
Archivo: manage.py

Descripción: Script de gestión principal de Django. Permite ejecutar comandos administrativos
como migraciones, servidor de desarrollo, shell de Django, etc.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Punto de entrada principal para gestionar el proyecto Django. Se ejecuta desde
la línea de comandos para realizar tareas administrativas como:
- python manage.py runserver (inicia el servidor de desarrollo)
- python manage.py migrate (ejecuta migraciones de base de datos)
- python manage.py createsuperuser (crea un usuario administrador)

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.
"""
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_crud_api.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
