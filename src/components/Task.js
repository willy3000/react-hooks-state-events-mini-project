import React from "react";

function Task(props) {
  const { text, category, removeTask } = props;
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeTask}>
        X
      </button>
    </div>
  );
}

export default Task;
