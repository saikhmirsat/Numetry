import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortType, setSortType] = useState('');
  const tasksPerPage = 16; // Number of tasks to display per page
  const [currentPage, setCurrentPage] = useState(1);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  const filterTasks = (category) => {
    setFilterCategory(category);
    setCurrentPage(1); // Reset to the first page when changing filters
  };

  const sortTasks = (type) => {
    setSortType(type);
  };

  const getFilteredAndSortedTasks = () => {
    let filteredTasks = tasks;

    if (filterCategory) {
      filteredTasks = filteredTasks.filter((task) => task.category === filterCategory);
    }

    if (sortType === 'dueDate') {
      filteredTasks.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
    } else if (sortType === 'category') {
      filteredTasks.sort((a, b) => (a.category > b.category ? 1 : -1));
    }

    return filteredTasks;
  };

  // Calculate the index of the first and last tasks for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = getFilteredAndSortedTasks().slice(indexOfFirstTask, indexOfLastTask);

  // Function to handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <FilterBar onFilterChange={filterTasks} onSortChange={sortTasks} />
      <div className='Flex_container'>
        <div>
          <TaskForm onAddTask={addTask} />
        </div>
        <div>
          <TaskList tasks={currentTasks} />

        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(getFilteredAndSortedTasks().length / tasksPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
