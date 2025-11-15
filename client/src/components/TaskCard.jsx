/**
 * Archivo: TaskCard.jsx
 * 
 * Descripción: Componente que representa una tarjeta individual de tarea. Muestra
 * el título, descripción y estado (completada/no completada) de una tarea.
 * Permite hacer clic en la tarjeta para navegar a la página de edición.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Componente visual que representa una tarea en la lista de tareas. Recibe
 * un objeto task como prop y muestra su información de forma atractiva. Al hacer
 * clic en la tarjeta, navega a la página de edición de esa tarea específica.
 * Muestra un badge visual indicando si la tarea está completada o no.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slate-400">{task.description}</p>
      <div className="flex justify-end mt-4">
        {task.done
          ? (
            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Realizado
            </span>
          )
          : (
            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">
              No Realizado
            </span>
          )}
      </div>
    </div>
  );
}
