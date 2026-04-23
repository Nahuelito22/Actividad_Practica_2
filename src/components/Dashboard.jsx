import react from 'react';
import { useState } from 'react';


function Dashboard() {
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareas, setTareas] = useState([{ id: 1, texto: "Estudiar React", completada: false },
    { id: 2, texto: "Hacer ejercicio", completada: true },
    { id: 3, texto: "Comprar comida", completada: false }]);
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
    return (
        <div>
            <h1>Tareas</h1>
            <input type="text" Placeholder="Escribi un tarea" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
            <button onClick={agregarTarea}>
                Agregar
            </button>
            <p>Cantidad de Tareas: {tareas.length}</p>
            {tareas.length === 0 ? (
                <p>No hay tareas</p>
            ) : (
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id}>{tarea.texto}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dashboard;