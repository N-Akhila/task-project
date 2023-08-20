import React, { useState } from 'react';

const Taskdata = ({ onAddTask }) => { // Prop which is coming from App.js
  const [task, setTask] = useState('');

  const handleAddTask = () => {
      onAddTask(task);  // Here when click on button, the task will get added to list. and the taskname will be persisted because we are saving the prop value in main file
      setTask('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default Taskdata;
