import React, { useState } from 'react'

const Practice2_newtod = (props) => {


  const [todo, setTodo] = useState('');



  const handleClick = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onPractice(todo)
  }


  return (
    <div>
      <form onClick={handleSubmit}>
        <div>
          <input type="text" name="todo" value={todo} onChange={handleClick} placeholder='New Todo'/>
        </div>
        <div>
          <button type='button'>Add to Browser.</button>
        </div>
      </form>
    </div>
  )
}

export default Practice2_newtod;
