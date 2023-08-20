import React, { useState } from 'react';
import Taskdata from './components/task';
import Filter from './components/filter';
import List from './components/list';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]); //We are taking taskName and completed as an object in Task List
  };

  // in this function we are updating tasks. In tasks we are checking which task is completed, if there is completed tasks we are adding it to updatedTasks list.
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; 
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;              
    } else if (filter === 'pending') {    //Here based on filter value we are performing operations. Initially filter value is 'all'.
      return !task.completed;             //Based on this filter value In filter.js we are filtering the tasks 
    }
    return true;
  });

  return (
    <div>
      <h1>Task List</h1>
      {/* we are passing onAddTask as a prop to Taskdata */}
      <Taskdata onAddTask={addTask} /> 
      {/* filter and onFilterChange are as a props to Filter function */}
      <Filter filter={filter} onFilterChange={setFilter} />
      {/* tasks and onCompleteTask are the props */}
      <List tasks={filteredTasks} onCompleteTask={completeTask} />
    </div>
  );
}

export default App;

// I used Props here. Instead of Redux or Context-API. In this we are not passing prop down through many components. So that's why I designed
//without props. I haven't added styles. I have added comments. 