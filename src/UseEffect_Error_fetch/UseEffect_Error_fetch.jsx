import React, { useEffect, useState } from 'react';


  // loading massege for loading in the display
  const loadingMessage = <p>Data is loading from API....</p>


const UseEffect_Error_fetch = () => {


  const [todo1, setTodo1] = useState(null);
  const [mas, setMas] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res1 => {
          if (!res1.ok) {
            throw Error("Not Fetch")
          } else {
            return res1.json();
          }
          
            .then(todo1 => {
              setTodo1(todo1);
              setMas(false)
              setError(null);
            })
            .catch((error) => {
              setError(error.message);
              setMas(false);
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

  

  return (
    <div>
      <h1>Todo</h1>
      {mas && loadingMessage}
      {error && {error}}
      {todoDisplay}
    </div>
  );
};

export default UseEffect_Error_fetch;
