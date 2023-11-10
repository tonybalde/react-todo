
import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return (
            <TodoListItem
              key={item.id}
              todo={item.title}
              id={item.id}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
