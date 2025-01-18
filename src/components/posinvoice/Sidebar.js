import React, { useState } from "react";

function Sidebar({ setActiveTab }) {
  const categories = [
    "All",
    "Japanese",
    "Indian Vegetarian",
    "Lunch Package",
    "Dinner Package",
    "Bengali Food",
    "Italian",
    "Indian Cuisine",
    "Mexican",
    "Arabian",
    "Chinese",
    "Sea Food",
    "Korean",
    "Asian",
    "Thai",
  ];

  // Set the initial active category to the first one in the list
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (setActiveTab) {
      setActiveTab(category); // Notify parent component if callback is provided
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="list-group">
        {categories.map((category) => (
          <button
            key={category}
            className={`list-group-item list-group-item-action ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
