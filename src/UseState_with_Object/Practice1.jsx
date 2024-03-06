import React, { useState } from 'react'

const Practice1 = () => {


  const [user, setUser] = useState({name:'', email:'', password:''});

  // Destructuring 
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" onChange={handleChange} placeholder='Name'/>
        </div>
        <div>
          <input type="email" name="email" onChange={handleChange} placeholder='Email'/>
        </div>
        <div>
          <input type="password" name="password" onChange={handleChange} placeholder='Password'/>
        </div>
        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Practice1;
