import React from "react";

const TaskList = ({ tasks, onEditTask }) => {
  return (
    <div className="TaskList_con">
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Category: {task.category}</p>
          <button onClick={() => onEditTask(task)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
