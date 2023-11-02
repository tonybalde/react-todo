import React from "react";

function TodoListItem({id, todo}){ // Destructuring Props
    return(
        <div>
            <li key={id}>{todo}</li>
        </div>
    );
}

export default TodoListItem;