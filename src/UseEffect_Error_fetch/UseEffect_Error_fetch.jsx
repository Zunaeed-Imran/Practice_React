import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffect_Error_fetch = () => {

  // this is for todo data.
  const [todo, setTodo] = useState(null);

  // this is for loading massege.
  const [isloading, setisLoading] = useState(true);


  const [error, setError] = useState(null);




  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resource => {
          if (!resource.ok) {
            throw Error('Fetching is not Sucessful')
          } else {
            return res.json();
          }
        })
        .then(data => {
          setTodo(data);
          setisLoading(false);
          setError(null);
        })
        .catch(error => {
          setError(error.message);
          setisLoading(false);
        });
    }, 1000)
  }, []);




// make a component to make it simplified.
  const todoDiaplay =
    todo &&
    todo.map(todos => {
      return <p key={todos.id}>{todos.title}</p>;
    });

  // loading massege variable.
  const loadingMassege = <p>Data is loading...</p>

  return (
    <>
      <h1>Todo</h1>
      {error && <p>{error}</p>}
      {isloading && loadingMassege}
      {todoDiaplay}
    </>
  );
}

export default UseEffect_Error_fetch;
