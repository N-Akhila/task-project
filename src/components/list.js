import React from 'react';

const List = ({ tasks, onCompleteTask }) => { //Here tasks and onComplete are two props
  return (
    // If we see below code we are mapping tasks based on index. In Checkbox, onChange event: we can see that onCompleteTask is calling
    // Here what will happen is, the tasks which are completed will moved to 'updatetasks' variable in App.js file 
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <label>                                         
            <input
              type="checkbox"
              checked={task.completed} 
              onChange={() => onCompleteTask(index)}
            />
            <span
              style={{
                color: task.completed ? 'green' : 'red', // we are giving color here
              }}
            >
              {task.name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default List;
