import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editTask, editingTask }) {
  const [taskData, setTaskData] = useState({ name: '', description: '' });

  useEffect(() => {
    if (editingTask) {
      setTaskData(editingTask);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.name || !taskData.description) {
      alert('Both fields are required.');
      return;
    }

    if (editingTask) {
      editTask(taskData);
    } else {
      addTask(taskData);
    }

    setTaskData({ name: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task name"
        value={taskData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Task description"
        value={taskData.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
