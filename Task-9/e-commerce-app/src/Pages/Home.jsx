import React, { useState, useEffect } from "react";
import { data } from "../Data";
import "./Home.css"; // Import the CSS file

export default function Home() {
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("priceLowToHigh"); // Default sorting option
  const [filteredProducts, setFilteredProducts] = useState([...data]); // Copy of the original product data

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      alert("Product is already in your cart");
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store cart data in local storage
      alert("Product added to your cart");
    }
  };

  // Function to handle sorting
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortBy(selectedOption);

    let sortedProducts = [...filteredProducts];

    if (selectedOption === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } // Add more sorting options if needed

    setFilteredProducts(sortedProducts);
  };

  // Function to handle filtering
  const handleFilter = (filterText) => {
    const filtered = data.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <h1>Product Catalog</h1>

      {/* Sorting and Filtering UI */}
      <div className="sorting-container">
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" onChange={handleSortChange} value={sortBy}>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            {/* Add more sorting options if needed */}
          </select>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>

      {/* Product Cards */}
      <div className="card-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <div className="card-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
