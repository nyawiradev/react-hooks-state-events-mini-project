import React from "react";

function CategoryFilter({categories, selectedCategory, onSetCategory}) {



  
  const categoryArray = categories.map((category) => {
    const isSelected = (category === selectedCategory ? "selected" :null)
    console.log(category)
    return (
      <button className={isSelected} onClick={() => onSetCategory(category)}key={category}>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
