import { useState, useEffect } from 'react';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import Progresstracker from './components/Progresstracker';
import './style.css';

export default function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD
  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  // UPDATE
  const updateTask = (text, index) => {
    const updated = [...tasks];
    updated[index].text = text;
    setTasks(updated);
    setEditIndex(null);
  };

  // TOGGLE COMPLETE / UNDO
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // DELETE
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // EDIT
  const editTask = (index) => {
    setEditIndex(index);
  };

  // CLEAR
  const clearTasks = () => {
    setTasks([]);
  };

  // DARK MODE
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>

      <header>
        <h1>TaskMan</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <Taskform
        addTask={addTask}
        tasks={tasks}
        editIndex={editIndex}
        updateTask={updateTask}
      />

      <Tasklist
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <Progresstracker tasks={tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}

    </div>
  );
}