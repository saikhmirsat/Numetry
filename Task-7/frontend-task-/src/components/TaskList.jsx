import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="TaskList_con">
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Category: {task.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
