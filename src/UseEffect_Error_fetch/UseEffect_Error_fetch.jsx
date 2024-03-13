import React, { useEffect, useState } from 'react';



const UseEffect_Error_fetch = () => {
  const [todo1, setTodo1] = useState(false);
  const [error, setError] = useState(false);
  const [mas, setMas] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          return res.json()
            .then(todo1 => {
              setTodo1(todo1);
              setMas(false)
        });
      });
    }, 1000)
  }, []);


  // display the todo massege taking in a variable.
  const todoDisplay =
    todo1 &&
    todo1.map(todo1 => {
      return <p key={todo1.id}>{todo1.title}</p>;
    });


  // loading massege for loading in the display
  const loadingMessage = <p>Data is loading from API....</p>
  

  return (
    <div>
      <h1>Todo</h1>
      {mas && loadingMessage}
      {todoDisplay}
    </div>
  );
};

export default UseEffect_Error_fetch;
