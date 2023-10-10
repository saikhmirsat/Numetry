import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SubjectTable from "./Components/SubjectTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <SubjectTable />
      </div>
    </div>
  );
}

export default App;
