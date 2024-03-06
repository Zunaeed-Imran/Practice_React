import React, { useState } from 'react'
import New_todos from './New_todos';

const Home = () => {

  const [todo, setTodo] = useState('');

  const handleNewTodo = () => {
    setTodo([todo]);
  }

  return (
    <div>
      <New_todos onNewTodo={handleNewTodo} />
    </div>
  )
}

export default Home;
