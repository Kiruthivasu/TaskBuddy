import { useState, useEffect } from 'react';

export default function Taskform({
  addTask,
  tasks,
  editIndex,
  updateTask
}) {
  const [input, setInput] = useState("");

  // Load task into input when editing
  useEffect(() => {
    if (editIndex !== null && tasks[editIndex]) {
      setInput(tasks[editIndex].text);
    }
  }, [editIndex, tasks]);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editIndex !== null) {
      updateTask(input, editIndex);
    } else {
      addTask(input);
    }

    setInput("");
  };

 
  return (
    <>
      {/* FORM */}
      <form className="task-form" onSubmit={handleSubmit}>
        <div id="inp">
          <input
            type="text"
            placeholder="Enter task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>

    </>
  );
}