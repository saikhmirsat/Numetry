import React, { useState, useEffect } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import "./CartPage.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  console.log(cart);
  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      // Calculate the total price
      const totalPrice = savedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    }
  }, []);

  // Function to update quantity for a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; // Ensure the quantity is never less than 1
    }
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Calculate the new total based on updated quantities
    const newTotal = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  // Function to remove a product from the cart
  const removeProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Calculate the new total after removing the product
    const newTotal = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  // Function to handle the checkout action
  const handleCheckout = () => {
    // Store the cart data in local storage with the name "checkoutData"
    localStorage.setItem("checkoutData", JSON.stringify(cart));

    // Redirect to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <div className="product-container">
        <h2>Your Cart</h2>
        {cart.length == 0 ? (
          <img
            style={{ marginBottom: "10px" }}
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          />
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="Remove_btn_cart"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="total-container">
        <h2>Total</h2>
        <p>${total}</p>
        <button
          disabled={cart.length == 0}
          className="checkout-button"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
