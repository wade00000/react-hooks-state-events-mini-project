import React from "react";
import Task from "./Task";

function TaskList({tasks,onDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task)=> (
        <Task
        key={task.text} // assuming `text` is unique; otherwise use an `id`
        text={task.text}
        category={task.category}
        onDelete={() => onDeleteTask(task.text)}
        />
      ))}
      
    </div>
  );
}

export default TaskList;
