import React, { useState } from 'react'

const Practice3 = () => {

  const [user, setUser] = useState({ name: '', email: '', password: '' });
  
  // destructuring 
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  }


  return (
    <div>
      <form>
        <div>
          <input type="text" name="name" onChange={handleChange} placeholder='Name' />
        </div>
        <div>
          <input type="email" name="email" onChange={handleChange} placeholder='Email' />          
        </div>
        <div>
          <input type="password" name="password" onChange={handleChange} placeholder='Password'/>
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>Add To Browser</button>
        </div>
      </form>
    </div>
  )
}

export default Practice3
