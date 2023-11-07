import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState(){  // I can put this whole code into another file and import it here
  
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : []; // ternary operator
    });

    useEffect(() => {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }, [todoList]);

    return [todoList, setTodoList]
}

function App() {
  
  // const [todoList, setTodoList] = useState(() => {
  //   const savedTodoList = localStorage.getItem("savedTodoList");
  //   return savedTodoList ? JSON.parse(savedTodoList) : []; // ternary operator
  // });

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  
  // useEffect(() => {
  //   localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  // }, [todoList]);
    

  return (
    <>
      <header>
        <h1>ToDo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
      </header>
    </>
  );
}

export default App;
