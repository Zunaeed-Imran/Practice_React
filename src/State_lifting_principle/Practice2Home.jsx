import React, { useState } from 'react'

import Practice2_newtod from './Practice2_newtod';


const Practice2Home = () => {


  const [todo, setTodo] = useState('');


  const practiceTodo2 = (todo) => {
    setTodo(todo);
  }


  return (
    <div>
      <h2>{todo}</h2>
      <Practice2_newtod onPractice={practiceTodo2} />
    </div>
  );
}

export default Practice2Home;
