import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, setTasks, setAllTasks } = props;

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setAllTasks(newTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task
            {...{
              text: task.text,
              category: task.category,
              removeTask: () => removeTask(index),
            }}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
