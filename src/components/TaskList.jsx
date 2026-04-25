import { } from "react";

function TaskList({ tareas, toggleCompletar }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>

      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <span
                style={{
                  textDecoration: tarea.completada ? "line-through" : "none"
                }}
              >
                {tarea.texto}
              </span>

              <button onClick={() => toggleCompletar(tarea.id)}>
                {tarea.completada ? "Deshacer" : "Completar"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;