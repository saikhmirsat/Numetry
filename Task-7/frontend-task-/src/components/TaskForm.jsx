import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      dueDate,
      category,
    };

    onAddTask(formData);

    setTitle("");
    setDescription("");
    setDueDate("");
    setCategory("");
  };

  return (
    <div className="Task_Form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
