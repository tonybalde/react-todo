import React from "react";

function TodoListItem({id, todo}){
    return(
        <div>
            <li key={id}>{todo}</li>
        </div>
    );
}

export default TodoListItem;