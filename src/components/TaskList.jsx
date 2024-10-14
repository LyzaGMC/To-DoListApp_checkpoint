import React from 'react';
import TaskItems from './TaskItems';

function TaskList({ tasks, deleteTask, setEditingTask, toggleComplete }) {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItems
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <p>No tasks available. Add a task to get started!</p>
      )}
    </ul>
  );
}

export default TaskList;
