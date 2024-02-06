import React, { useState } from "react";

function CategoryFilter(props) {
  const { categories, allTasks, tasks, setTasks } = props;
  const [currentCategory, setCurrentCategory] = useState(null);

  const selectCategory = (category) => {
    const newTasks = allTasks.filter((task) => {
      if (task.category === category || category === "All") {
        return task;
      }
    });
    setCurrentCategory(category);
    setTasks([...newTasks]);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => selectCategory(category)}
            className={category === currentCategory ? "selected" : ""}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
