import React from "react";
import { SiAddthis } from "react-icons/si";

export default function TodoItem({ AddTodo }) {
  const [text, setText] = React.useState("");
  const onclick = () => {
    AddTodo(text);
    setText("");
  };

  return (
    <div className="input_container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type"
      />
      <button onClick={onclick}>
        <SiAddthis size={25} color="white" />
      </button>
    </div>
  );
}
