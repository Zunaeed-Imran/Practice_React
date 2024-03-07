import React, { useState } from 'react'

import Practice2_newtod from './Practice2_newtod';


const Practice2Home = () => {


  const [em, setTodo] = useState('');


  const practiceTodo2 = (em) => {
    setTodo(em);
  }


  return (
    <div>
      <h2>{em}</h2>
      <Practice2_newtod onPractice={practiceTodo2} />
    </div>
  );
}

export default Practice2Home;
