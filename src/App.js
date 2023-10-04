import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
         <h1>ToDO List</h1>
         <AddTodoForm />
         <TodoList />
      </header>
    </div>
  );
}

export default App;
