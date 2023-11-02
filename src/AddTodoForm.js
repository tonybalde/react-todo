import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // An unique id to each todo item

function AddTodoForm({onAddTodo}) { // Destructuring Prop
  const [todoTitle, setTodoTitle] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();
    if (todoTitle.trim() === "") {
      return; // Prevent adding an empty to-do
    }

    const newTodo = {
      title: todoTitle,
      id: uuidv4()
    };

    onAddTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="todoTitle"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
