import React, { useState } from 'react'




const Form_data_show = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const nameChange = (r) => {
    setName(r.target.value);
  }
  const emailChange = (r) => {
    setEmail(r.target.value);
  }
  const passwordChange = (r) => {
    setPassword(r.target.value);
  }

  const submitChange = (r) => {
    console.log(name, email, password);
    r.preventDefault('');
  }


  return (
    <div>
      <form>
        <div>
          <input type="text" name="name" placeholder='Name' onChange={nameChange}/>
        </div>
        <div>
          <input type="email" name="email" placeholder='Email' onChange={emailChange}/>
        </div>
        <div>
          <input type="password" name="password" placeholder='Password' onChange={passwordChange}/>
        </div>
        <div>
          <button type='submit' onClick={submitChange}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Form_data_show;
