import React,{useState} from "react";



function CategoryFilter({categories,onCategoryChange}) {
  const [selectedCategory,setSelectedCategory] = useState("All")

  function handleClick(category){
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
       {categories.map((category)=>
        <button 
        key={category} 
        onClick={()=>handleClick(category)}
        className={selectedCategory === category ? "selected" : ""}
        >
         {category}
        </button>
       )}
    </div>
  );
}

export default CategoryFilter;
