import React, { useState } from 'react'






const Practice1 = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const nameChange = (e) => {
    setName(e.target.value);
  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passwordChanged = (e) => {
    setPassword(e.target.value);
  }

  const submitChange = (e) => {
    console.log(name, email, password);
    e.preventDefault();
  }

  return (
    <div>
      <form action="">
        <div>
        <input type="text" name="name" value={name} onChange={nameChange} placeholder='Name' />
        </div>
        <div>
          <input type="email" name="email" value={email} onChange={emailChange} placeholder='Email'/>
        </div>
        <div>
          <input type="password" name="password" value={password} onChange={passwordChanged} placeholder='Password'/>
        </div>
        <div>
        <button type='submit' onClick={submitChange}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Practice1
