import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {


  const [todo2, setTodo2] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res2) => {
        return res2.json().then((data2) => {
          setTodo2(data2);
        });
      });
  });


  return (
    <div>
      <h2>Todo</h2>
      {todo2 && todo2.map((todo2) => {
        return <p key={todo2.id}>{todo2.title}</p>
      })}
    </div>
  )
}

export default UseEffect2;
