export default function Tasklist({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={task.completed ? "completed" : ""}
        >
          <span>{task.text}</span>

          <div>
            <button onClick={() => toggleTask(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => editTask(index)}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}