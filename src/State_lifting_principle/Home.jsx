import React, { useState } from 'react';
import New_todos from './New_todos';

const Home = () => {
  const [todo, setTodo] = useState('');

  const handleNewTodo = todo => {
    setTodo(todo);
    console.log(todo);
  };

  return (
    <div>
      <h2>{todo}</h2>
      <New_todos onNewTodo={handleNewTodo} />
    </div>
  );
};

export default Home;
