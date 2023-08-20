import React from 'react';

const Filter = ({ filter, onFilterChange }) => { // onFilterChange is coming as prop from App.js
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>Show All Tasks</button>
      <button onClick={() => onFilterChange('completed')}>Show Only Completed Tasks</button>
      <button onClick={() => onFilterChange('pending')}>Show Only Pending Tasks</button>
    </div>
  );
}

export default Filter;
