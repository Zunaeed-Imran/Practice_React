import React, { useState } from 'react';

const Practice3_New_todo = (props) => {
  const [test3, setTest3] = useState('');

  const handleChange = (e) => {
    setTest3(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onGoing(test3);
  }


  return (
    <div>
      <form>
        <div>
          <input type="text" name="name" value={test3} onChange={handleChange} placeholder="Todo" />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Practice3_New_todo;
