/**
 * Archivo: Navigation.jsx
 * 
 * Descripción: Componente de navegación que proporciona la barra de navegación
 * principal de la aplicación. Incluye el título de la aplicación y un botón
 * para crear nuevas tareas.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Componente de navegación que se muestra en todas las páginas de la aplicación.
 * Proporciona un enlace al título "Task App" que navega a la página principal de tareas,
 * y un botón "Create Task" que navega a la página de creación de tareas. Se renderiza
 * en el componente App para estar disponible en todas las rutas.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h3 className="font-bold text-3xl mb-4">Task App</h3>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to="/tasks-create">Create Task</Link>
      </button>
    </div>
  );
}
