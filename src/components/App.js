import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState (TASKS)

  const selectedTasks = tasks.filter((task) => {
    return category === "All" || task.category === category
  })

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSetCategory={setCategory}/>
      <NewTaskForm onAddTask={handleAddTask} categories={CATEGORIES}/>
      <TaskList tasks={selectedTasks}/>
    </div>
  );
}

export default App;

