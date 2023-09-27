import React, { useEffect, useState } from "react";
import "./Allresume.css";

export default function Allresumes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/resume`)
      .then((res) => res.json())
      .then((res) => {
        setData(res); // Set the data, not 'data'
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const PrevFunc = (id) => {
    localStorage.setItem("id", id);
    window.location.href = `/preview/`;
  };

  const deleteFunc = (id) => {};

  return (
    <div className="All_resume_box">
      <div>
        {data.map(
          (
            ele,
            ind // Use parentheses to return JSX
          ) => (
            <div key={ind}>
              {" "}
              <h1>Resume {ind + 1}</h1>
              <p>Name: {ele.name}</p>
              <button onClick={() => PrevFunc(ele._id)}>View </button>
              <button onClick={() => deleteFunc(ele._id)}>Delete</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
