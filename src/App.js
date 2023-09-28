import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  let todoList = [
    {id: 1,
     title: "Learning React",
     key: uuidv4(),
    },
    {id: 2,
     title: "HTML is NOT a programming language",
     key: uuidv4(),

     },
    {id: 3,
     title: "Turn in the assignament",
     key: uuidv4(),
     }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
         <h1>ToDO List</h1>
         <ul>
            {todoList.map(function (item) {
            return (
              <li id={item.id} >{item.title}</li>
          );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
