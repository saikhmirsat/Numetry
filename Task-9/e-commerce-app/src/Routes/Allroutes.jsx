import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import CartPage from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";
import OrderHistoryPage from "../Pages/OrderHistoryPage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cartpage" element={<CartPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/historypage" element={<OrderHistoryPage />}></Route>
    </Routes>
  );
}
