/**
 * Archivo: TasksPage.jsx
 * 
 * Descripción: Componente de página que renderiza la lista de tareas. Actúa como
 * contenedor principal para mostrar todas las tareas disponibles en el sistema.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Página principal que se renderiza en la ruta /tasks. Contiene el componente
 * TasksList que muestra todas las tareas obtenidas de la API. Es el punto de entrada
 * principal para visualizar las tareas del sistema.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import { TasksList } from "../components/TasksList";

export function TasksPage() {
  return <TasksList />

}
