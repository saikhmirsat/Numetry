import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Preview from "../Page/Preview";
import Edit from "../Page/Edit";
import Allresumes from "../Page/Allresumes";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/allresumes" element={<Allresumes />} />
    </Routes>
  );
}
