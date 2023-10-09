import React, { useState } from "react";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState(""); // Use state to manage the input value

  function handleAddTodo(event) {
    event.preventDefault();
    props.onAddTodo(todoTitle);
    console.log(todoTitle);
    // Access the todoTitle from the state
    setTodoTitle(""); // Clear the input field by setting it to an empty string
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="todoTitle" // Add a name attribute to the input
          value={todoTitle} // Bind the input value to the state
          onChange={(e) => setTodoTitle(e.target.value)} // Update the state when the input changes
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
