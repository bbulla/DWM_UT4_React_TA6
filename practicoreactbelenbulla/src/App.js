import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Lista de Tareas</h1>

        <div className="field">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Ingresa una tarea" 
              value={task}
              onChange={handleInputChange} 
            />
          </div>
        </div>

        <button className="button is-primary" onClick={addTask}>
          Agregar tarea
        </button>

        <ul className="mt-5">
          {tasks.map((task, index) => (
            <li key={index} className="box">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
