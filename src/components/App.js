import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS);
const [filter, setFilter] = useState("All");  

function onTaskFormSubmit(newTask){
  setTasks(prev => [...prev,newTask]);
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilter={setFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter}/>
    </div>
  );
}

export default App;
