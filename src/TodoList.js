
import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList}) { // Destructuring Prop
  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return (
            <TodoListItem key={item.id} todo={item.title} />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
