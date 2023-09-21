import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  console.log(history);

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperatorClick = (operator) => {
    setInput(input + operator);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(input); 
      setHistory([...history, `${input} = ${result}`]);
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const deleteHistoryItem = (index) => {
    const filteredHistory = history.filter((ele, idx) => idx !== index);
    setHistory(filteredHistory);
  };

  return (
    <div className="Calculator_main_con">
      <div>
        <div className="calculator">
          <input type="text" value={input} readOnly />

          <div className="buttons">
            <div className="row">
              <button onClick={() => handleNumberClick("7")}>7</button>
              <button onClick={() => handleNumberClick("8")}>8</button>
              <button onClick={() => handleNumberClick("9")}>9</button>
              <button onClick={handleDelete} style={{ fontSize: "18px" }}>
                Delete
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleNumberClick("4")}>4</button>
              <button onClick={() => handleNumberClick("5")}>5</button>
              <button onClick={() => handleNumberClick("6")}>6</button>
              <button onClick={() => handleOperatorClick("+")}>+</button>
            </div>
            <div className="row">
              <button onClick={() => handleNumberClick("1")}>1</button>
              <button onClick={() => handleNumberClick("2")}>2</button>
              <button onClick={() => handleNumberClick("3")}>3</button>
              <button onClick={() => handleOperatorClick("-")}>-</button>
            </div>
            <div className="row">
              <button onClick={() => handleNumberClick("0")}>0</button>
              <button onClick={() => handleOperatorClick("*")}>*</button>
              <button onClick={() => handleOperatorClick("/")}>/</button>
              <button onClick={handleClear} style={{ fontSize: "18px" }}>
                Clear
              </button>
            </div>
            <div className="row">
              <button onClick={handleCalculate}>=</button>
            </div>
          </div>
        </div>
      </div>
      <div className="history">
        <div>
          <h2>History</h2>
          <div className="history_wrapper">
            {history.map((item, index) => (
              <div key={index}>
                <p>{index + 1} .</p>
                <p key={index}>{item}</p>
                <button onClick={() => deleteHistoryItem(index)}>Delete</button>
              </div>
            ))}
          </div>
          <button onClick={clearHistory}>Clear History</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
