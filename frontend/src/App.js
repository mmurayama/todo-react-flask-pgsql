import React, { useEffect, useState } from 'react';
import './App.css';
import TodoNav from './components/TodoNav';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const fetchList = () => {
      fetch('/api/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (!response.ok) {
          throw Error(response);
        } else {
          return response.json();
        }
      }).then(function (response) {
          setTodos(response);
          setFilteredTodos(response);
      }).
        catch(function (error) {
          console.log(error);
        });
    };
    fetchList();
  }, [todo]);

  return (
    <div className="App">
      <TodoNav
        todos={todos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoForm
        setTodo={setTodo}
      />
      <TodoList
        setTodo={setTodo}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;