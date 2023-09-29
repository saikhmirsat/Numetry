import React from "react";
import './OrderHistoryPage.css'

export default function OrderHistoryPage() {
  // Get the order data from local storage
  const orderData = JSON.parse(localStorage.getItem("OrderData"));

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orderData ? (
        <ul>
          {orderData.map((order, index) => (
            <li key={index}>
              <div>Order Date: {order.orderDate}</div>
              <div>Address: {order.address}</div>
              <div>Payment Method: {order.payment}</div>
              <div>Total: ${order.total}</div>
              {/* Render order items or any other relevant information */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
