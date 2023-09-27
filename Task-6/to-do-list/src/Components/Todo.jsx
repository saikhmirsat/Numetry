import React from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

export default function Todo() {
  const [arr, setArr] = React.useState([]);
  const AddTodo = (text) => {
    if (!text) {
      alert("Please enter a task.");
      return;
    }

    if (arr.some((item) => item.title === text)) {
      alert("Task already exists.");
      return;
    }

    const object = {
      title: text,
      status: false,
      id: new Date().toDateString() + text,
    };
    setArr([...arr, object]);
  };

  const togglebtn = (id) => {
    const toggleUpdate = arr.map((ele) =>
      ele.id === id ? { ...ele, status: !ele.status } : ele
    );
    setArr(toggleUpdate);
  };
  const deleteItem = (id) => {
    const updatedArr = arr.filter((ele) => ele.id !== id);
    setArr(updatedArr);
  };

  return (
    <div className="Todo_Container">
      <h1>Todo List</h1>

      <TodoItem AddTodo={AddTodo} />
      <div className="Todo_list_container">
        {arr.map((ele) => (
          <TodoList
            key={ele.id}
            title={ele.title}
            status={ele.status}
            id={ele.id}
            togglebtn={togglebtn}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}
