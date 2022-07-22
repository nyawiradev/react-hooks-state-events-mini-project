import React, {useState} from "react";

function NewTaskForm({categories, onAddTask}) {

  const [newTask, setNewTask] = useState("")
    const categoryArray = categories.map((category) => {
  
      return (
        <option key={category}>{category}</option>
      )
  
    })
  
    function handleSubmit(event) {
      event.preventDefault();
      onAddTask(newTask)}
  
    return (
      <form className="new-task-form">
        <label>
          Details
          <input onChange={(event) => setNewTask(event.target.value)} type="text" name="text" />
        </label>
        <label>
          Category
          <select name="category">
            {categoryArray}
          </select>
        </label>
        <input onSubmit={handleSubmit} type="submit" value="Add task" />
      </form>
    );
  }
  
  export default NewTaskForm