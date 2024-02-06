import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [allTasks, setAllTasks] = useState([...TASKS]);

  const onTaskFormSubmit = (values) => {
    let newTasks = [...allTasks];
    newTasks.push({ text: values.text, category: values.category });
    setTasks(newTasks);
    setAllTasks(newTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        {...{
          categories: CATEGORIES,
          allTasks: [...allTasks],
          tasks,
          setTasks,
          setAllTasks,
        }}
      />
      <NewTaskForm
        {...{
          categories: CATEGORIES,
          onTaskFormSubmit: onTaskFormSubmit,
        }}
      />
      <TaskList {...{ tasks, setTasks, setAllTasks }} />
    </div>
  );
}

export default App;
