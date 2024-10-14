import React from "react";

function TaskItems({ task, deleteTask, setEditingTask, toggleComplete }) {
  return (
    <li className={`task-items ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => setEditingTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItems;
