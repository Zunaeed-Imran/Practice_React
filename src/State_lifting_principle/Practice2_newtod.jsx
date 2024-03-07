import React, { useState } from 'react'

const Practice2_newtod = (props) => {


  const [to, setTodo] = useState('');



  const handleClick = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onPractice(to);
  }


  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="todo"
            value={to}
            onChange={handleClick}
            placeholder="New Todo"
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Add to Browser.
          </button>
        </div>
      </form>
    </div>
  );
}

export default Practice2_newtod;
