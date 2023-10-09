import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [newTodo, setNewTodo] = useState("hi");

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
         <h1>ToDO List</h1>
         <AddTodoForm onAddTodo={setNewTodo}/>
         <p>{newTodo}</p>
         <TodoList />
      </header>
    </div>
  );
}

export default App;
