import React from "react";

let todoList = [
    {id: 1,
     title: "Learning React",
    },
    {id: 2,
     title: "HTML is NOT a programming language",
    },
    {id: 3,
     title: "Turn in the assignament",
    }
  ];

function TodoList (){
    
    return(
        <div>
            <ul>
                {todoList.map(function (item) {
                return (
                <li id={item.id} >{item.title}</li>
            );
            })}
            </ul>

        </div>
    )
}

export default TodoList;