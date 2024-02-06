import React, { useState } from "react";

function NewTaskForm(props) {
  const {categories, onTaskFormSubmit } = props;
  const [values, setVaues] = useState({
    text: null,
    category: null,
  });

  const handleChange = (e, field) => {
    setVaues({ ...values, [field]: e.target.value });
  };

  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.category !== null && values.text !== null) {
      onTaskFormSubmit(values);
    }
    return values
  };

  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => handleChange(e, "text")}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => handleChange(e, "category")}>
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
