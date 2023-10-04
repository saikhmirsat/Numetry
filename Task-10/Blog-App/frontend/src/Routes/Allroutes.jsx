import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/blogs" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
