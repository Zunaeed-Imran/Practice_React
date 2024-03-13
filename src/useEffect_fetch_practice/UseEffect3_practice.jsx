import React, { useEffect, useState } from 'react'

const UseEffect3_practice = () => {

  const [todo3, setTodo3] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res3 => {
      return res3.json().then(data3 => {
        setTodo3(data3);
      });
    });
  });



  return (
    <div>
      <h2>Title</h2>
      {todo3 && todo3.map((todo3) => {
        return <p key={todo3.id}>{todo3.title}</p>
      })} 
    </div>
  )
}

export default UseEffect3_practice;
