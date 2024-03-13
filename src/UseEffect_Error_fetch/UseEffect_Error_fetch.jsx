import React, { useEffect, useState } from 'react';

const UseEffect_Error_fetch = () => {
  const [todo1, setTodo1] = useState();
  const [error, setError] = useState(false);
  const [mas, setMas] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
      return res.json().then(todo1 => {
        setTodo1(todo1);
      });
    });
  });

  return (
    <div>
      <h1>Todo</h1>
      {todo1 && todo1.map((todo1) => {
        return <p key={todo1.id}>{todo1.title}</p>
      })}
    </div>
  );
};

export default UseEffect_Error_fetch;
