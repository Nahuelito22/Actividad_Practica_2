import { useState } from "react";
import TaskList from "./TaskList";
    function Dashboard() {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const [tareas, setTareas] = useState([
        { id: 1, texto: "Estudiar React", completada: false },
        { id: 2, texto: "Hacer ejercicio", completada: true },
        { id: 3, texto: "Comprar comida", completada: false }
    ]);

    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") return;

        const nueva = {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false
        };

        setTareas([...tareas, nueva]);
        setNuevaTarea("");
    };

    const toggleCompletar = (id) => {
        const nuevasTareas = tareas.map((tarea) =>
        tarea.id === id
            ? { ...tarea, completada: !tarea.completada }
            : tarea
        );

        setTareas(nuevasTareas);
    };

    return (
        <div>
        <h1>Tareas</h1>

        <input
            type="text"
            placeholder="Escribí una tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
        />

        <button onClick={agregarTarea}>
            Agregar
        </button>

        <p>Cantidad de tareas: {tareas.length}</p>

        {tareas.length === 0 ? (
            <p>No hay tareas</p>
        ) : (
            <TaskList tareas={tareas} toggleCompletar={toggleCompletar} />
        )}
        </div>
    );
    }

    export default Dashboard;