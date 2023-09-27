import React, { useState } from "react";

const FilterBar = ({ onFilterChange, onSortChange }) => {
  const [filterCategory, setFilterCategory] = useState("");
  const [sortType, setSortType] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterCategory(value);
    onFilterChange(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortType(value);
    onSortChange(value);
  };

  return (
    <div className="filterBar">
      <div>
        <label>Filter by Category :</label>
        <select value={filterCategory} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
        </select>
      </div>
      <div>
        <label>Sort by :</label>
        <select value={sortType} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="dueDate">Due Date</option>
          <option value="category">Category</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
