import React from "react";

function Task({text,category, removeTask}) {
  function handleRemove(e){
    removeTask(prev => prev.filter(x=>x.text !== text));
  }
  return (
    <div className='task'>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;
