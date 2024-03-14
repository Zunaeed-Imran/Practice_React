import React, { useState, useEffect } from 'react'





const UseEffectErrorPrac2 = () => {



  const [todo2, setTodo2] = useState();
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos').then(res2 => {
        return res2.json().then(data2 => {
          setTodo2(data2);
          setLoading(false);
        });
      });
    }, 1000)
  });





  // i take it in a 
  const displayTodo =
    todo2 &&
    todo2.map(todo2 => {
      return <p key={todo2.id}>{todo2.title}</p>;
    });

  // loading massege.
  const loadingMassege = <p>Loading From API......</p>
  
  

  return (
    <>
      <h2>Todo</h2>
      {isloading && loadingMassege}
      {displayTodo}
    </>
  )
}

export default UseEffectErrorPrac2;
