import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

export default function CheckoutPage() {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false); // State to control success image display

  const cartData = JSON.parse(localStorage.getItem("cart"));
  const handlePlaceOrder = () => {
    // Create an order object
    const order = {
      checkoutData: cartData,
      address: address,
      payment: paymentMethod,
      total: calculateTotal(cartData),
      orderDate: new Date().toLocaleString(),
    };

    // Get existing order data from local storage or create an empty array
    const existingOrderData =
      JSON.parse(localStorage.getItem("OrderData")) || [];

    // Add the new order to the existing order data
    existingOrderData.push(order);

    // Store the updated order data in local storage
    localStorage.setItem("OrderData", JSON.stringify(existingOrderData));

    setOrderPlaced(true);

    // Clear the cart after placing the order
    localStorage.removeItem("checkoutData");
    localStorage.removeItem("cart");
  };

  const calculateTotal = (cartData) => {
    return cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Render the success image if orderPlaced is true
  const renderSuccessImage = () => {
    if (orderPlaced) {
      return (
        <div className="success-image">
          <img
            style={{ width: "50%", margin: "auto" }}
            src="https://cdn.dribbble.com/users/422668/screenshots/2926762/radial_progress_bar.gif"
            alt="Success"
          />
          <Link className="Continue_BTN" to="/">
            Shoping Continue
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form style={orderPlaced ? { display: "none" } : {}}>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="COD">COD</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            {/* Add other payment methods as needed */}
          </select>
        </div>
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>

      {/* Render the success image */}
      {renderSuccessImage()}
    </div>
  );
}
