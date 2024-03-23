import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';



const New_users = ({handelAddUser}) => {

  const [username, setusername] = useState('');


  const handleChange = (e) => {
    setusername(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: uuidv4().toString(), username: username };
    handelAddUser(newUser);
    setusername('');
  }


  return (
    <>
      <h3>User Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={username}
          onChange={handleChange} />
          
        <button>Add</button>
      </form>
    </>
  )
}

export default New_users;
