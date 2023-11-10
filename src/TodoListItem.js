
import React from "react";

function TodoListItem({ id, todo, onRemoveTodo }) {
  return (
    <div>
      <li key={id}>
        {todo}
        <button type="button" onClick={() => onRemoveTodo(id)}>
          Remove
        </button>
      </li>
    </div>
  );
}

export default TodoListItem;
