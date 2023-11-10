
import React, { useState, useEffect, useRef } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Set focus when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures it runs only once on mount

  function handleAddTodo(event) {
    event.preventDefault();
    if (todoTitle.trim() === "") {
      return;
    }

    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    onAddTodo(newTodo);
    setTodoTitle("");

    // Set focus after adding a new todo
    inputRef.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          ref={inputRef}  // Set up the ref for the input element
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
