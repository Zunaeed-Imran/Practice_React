import React, { useState } from 'react'

const New_todo = (props) => {


  const [test1, setTest1] = useState({title:'', desc:''});

  // destructuring
  const { title, desc } = test1;


  const handleClick = (e) => {
    const name = e.target.name;
    setTest1(name.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewtodo(test1);
    setTest1({ title: '', desc: '' });
  }



  return (
    <div>
      <form onClick={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleClick}
            placeholder="Title"
          />
        </div>
        <div>
          <input
            type="text"
            name="desc"
            value={desc}
            onClick={handleClick}
            placeholder="Description"
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default New_todo;
