import React from "react";
import Task from "./Task"

function TaskList({tasks}) {

  const taskArray = tasks.map((task) => {
    return (
      <Task key={task.text} name={task.text} category={task.category}/>
    )
  })
  
  
    return (
      <div className="tasks">
        <ul>
        {taskArray}
        </ul>
      </div>
    );
  }

export default TaskList;
