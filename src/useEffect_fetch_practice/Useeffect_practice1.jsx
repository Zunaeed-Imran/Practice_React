import React, { useState } from 'react';
import { useEffect } from 'react';

const Useeffect_practice1 = () => {
  const [todo1, setTodo1] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
      return res.json().then(data => {
        setTodo1(data);
      });
    });
  }, []);

  return (
    <div>
      <h1>Title</h1>
      {todo1 && todo1.map((todo1) => {
        return <p key={todo1.id}>{todo1.title}</p>
      })}
    </div>
  );
};

export default Useeffect_practice1;
