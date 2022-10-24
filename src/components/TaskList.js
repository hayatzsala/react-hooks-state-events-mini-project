import React from "react";
import Task from './Task'
function TaskList({tasks, setTasks, filter}) {
  return (
    <div className="tasks">
      
      {console.log(tasks.length)}
      {tasks.filter(x=>filter ==="All" || x.category === filter)
      .map(x=><Task key={x.text} text={x.text} category={x.category} removeTask={setTasks}/>)}
    </div>
  );
}

export default TaskList;
