import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingTask, setEditingTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index) => {
        setEditingIndex(index);
        setEditingTask(tasks[index]);  // Pre-fill the input with the task to be edited
    };

    const handleSaveTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? editingTask : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
    };

    return (
        <div className="container mt-6">
            <h1 className="title">Lista de Tareas</h1>

            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Nueva tarea"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={handleAddTask}>
                        Agregar tarea
                    </button>
                </div>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="box">
                        {editingIndex === index ? (
                            // Renderiza el input si estamos editando esta tarea
                            <div className="field has-addons">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={editingTask}
                                        onChange={(e) => setEditingTask(e.target.value)}
                                    />
                                </div>
                                <div className="control">
                                    <button
                                        className="button is-success"
                                        onClick={() => handleSaveTask(index)}>
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Si no estamos editando, solo muestra la tarea
                            <div className="is-flex is-justify-content-space-between">
                                <span>{task}</span>
                                <div>
                                    <button
                                        className="button is-small is-warning mr-2"
                                        onClick={() => handleEditTask(index)}>
                                        Editar
                                    </button>
                                    <button
                                        className="delete is-small"
                                        onClick={() => handleDeleteTask(index)}>
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;