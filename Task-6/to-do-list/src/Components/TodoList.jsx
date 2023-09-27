import React from "react";
import { BsCircle } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

export default function TodoList({ title, status, id, togglebtn, deleteItem }) {  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <div className="todo_card">
      <h3>{title}</h3>
      <button onClick={() => togglebtn(id)}>
        {!status ? (
          <BsCircle size={20} color="red" />
        ) : (
          <BsCheck2Circle size={20} color="green" />
        )}{" "}
      </button>
      <button className="deleteBTN" onClick={handleDelete}>
        <AiOutlineDelete size={20} color="red" />
      </button>
    </div>
  );
}
