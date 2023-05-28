import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function LoadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    LoadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  );
}
