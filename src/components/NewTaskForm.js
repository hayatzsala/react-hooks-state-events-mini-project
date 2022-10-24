import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState();
  const [newTaskCat, setNewTaskCat] = useState("All");
  
  function handleSelectedOption(e){
    setNewTaskCat(e.target.value);
    console.log(e.target.value);
  

  }

  return (
    <form className="new-task-form" onSubmit={e => {
      e.preventDefault();
      onTaskFormSubmit({text : newTask, category :newTaskCat});
    }}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>setNewTask(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectedOption}>
          {/* render <option> elements for each category here */}
        {categories.map((x,index)=> <option key={index}>{x}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
