import React from "react";

function CategoryFilter({categories, setFilter}) {
  function handleFilter(e){
    setFilter(e.target.value)
    e.target.className = "selected"
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((x,index)=> <button key={index} onClick={handleFilter} value={x} className={""}>{x}</button>)}
    </div>
  );
}

export default CategoryFilter;
